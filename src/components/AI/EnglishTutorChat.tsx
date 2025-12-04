import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import io from "socket.io-client";

interface ChatMessage {
  from: "bot" | "user";
  text: string;
}

type Mode = "practice" | "free";

interface Props {
  onClose: () => void;
}

const socket = io("https://aj-talk-server.onrender.com");

const EnglishTutorChat:  React.FC<Props> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>("practice");

  const [voiceLang, setVoiceLang] = useState<string>("en-IN"); // default: Indian English
  const [voiceRate, setVoiceRate] = useState<number>(1); // 1 = normal

  const recognitionRef = useRef<any>(null);

  // 🔊 Helper: speak text using browser TTS with selected accent + speed
  const speakText = (text: string) => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) {
      console.warn("Text-to-Speech not supported in this browser.");
      return;
    }

    if (!text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLang;
    utterance.rate = voiceRate;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  // 🧠 Socket: listen for messages from server
  useEffect(() => {
    const handler = (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("chatMessage", handler);

    return () => {
      socket.off("chatMessage", handler);
    };
  }, []);

  // 🔁 Whenever a new bot message arrives → speak it
  useEffect(() => {
    if (messages.length === 0) return;
    const last = messages[messages.length - 1];
    if (last.from === "bot") {
      speakText(last.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // 🎙️ Setup SpeechRecognition once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript as string;
      console.log("Heard:", transcript);

      // Directly send what you spoke as a message
      sendMessage(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 💬 Send text message (from input or from STT)
  const sendMessage = (textFromMic?: string) => {
    const text = (textFromMic ?? input).trim();
    if (!text) return;

    socket.emit("chatMessage", { text, mode });

    if (!textFromMic) {
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  // 🎙️ Start/stop mic
  const toggleListening = () => {
    const recognition = recognitionRef.current;

    if (!recognition) {
      alert(
        "Speech recognition is not supported in this browser. Try Chrome on desktop or Android."
      );
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      try {
        recognition.start();
        setIsListening(true);
      } catch (err) {
        console.error("Error starting recognition:", err);
        setIsListening(false);
      }
    }
  };

  const handleVoiceLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVoiceLang(e.target.value);
  };

  const handleVoiceRateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVoiceRate(Number(e.target.value));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-sm position-relative" style={{ width: "460px" }}>

        {/* ❌ Close button */}
        <button
          className="btn btn-sm btn-outline-secondary position-absolute"
          style={{ top: "10px", right: "10px" }}
          onClick={onClose}
        >
          ✖
        </button>
        <div className="card-body">
          <h2 className="h5 text-center mb-1">
            English AI Voice Tutor 🎙️📚
          </h2>
          <p className="text-center text-muted small mb-3">
            The AI will correct your English and explain mistakes. Talk or type.
          </p>

          {/* Mode buttons */}
          {/* <div className="d-flex justify-content-center gap-2 mb-2 small">
            <button
              type="button"
              className={`btn btn-sm rounded-pill ${
                mode === "free" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setMode("free")}
            >
              Free chat
            </button>
            <button
              type="button"
              className={`btn btn-sm rounded-pill ${
                mode === "practice" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setMode("practice")}
            >
              Practice mode
            </button>
          </div> */}

          {/* Voice settings */}
          <div className="d-flex gap-2 mb-3 small">
            <div className="flex-grow-1">
              <label className="form-label mb-1">Voice accent</label>
              <select
                value={voiceLang}
                onChange={handleVoiceLangChange}
                className="form-select form-select-sm"
              >
                <option value="en-IN">English (India)</option>
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
              </select>
            </div>

            <div style={{ width: "120px" }}>
              <label className="form-label mb-1">Speed</label>
              <select
                value={voiceRate}
                onChange={handleVoiceRateChange}
                className="form-select form-select-sm"
              >
                <option value={0.8}>Slow</option>
                <option value={1}>Normal</option>
                <option value={1.2}>Fast</option>
              </select>
            </div>
          </div>

          {/* Chat window */}
          <div
            className="border rounded p-2 mb-3 bg-light"
            style={{ height: "280px", overflowY: "auto", fontSize: "0.9rem" }}
          >
            {messages.length === 0 && (
              <p className="text-muted text-center mt-4 small">
                Say something like: “I goes to market yesterday.”
                <br />
                The AI will correct your sentence and explain.
              </p>
            )}

            {messages.map((m, i) => {
              const isBot = m.from === "bot";
              return (
                <div
                  key={i}
                  className={`d-flex mb-2 ${
                    isBot ? "justify-content-start" : "justify-content-end"
                  }`}
                >
                  <div
                    className={`p-2 rounded ${
                      isBot
                        ? "bg-primary-subtle text-dark"
                        : "bg-primary text-white"
                    }`}
                    style={{ maxWidth: "80%", whiteSpace: "pre-wrap" }}
                  >
                    <div
                      className="fw-semibold mb-1"
                      style={{ fontSize: "0.7rem", opacity: 0.8 }}
                    >
                      {isBot ? "Teacher" : "You"}
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>{m.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input + mic */}
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              onClick={toggleListening}
              className={`btn btn-sm rounded-circle ${
                isListening ? "btn-danger" : "btn-success"
              }`}
              title={
                isListening
                  ? "Click to stop listening"
                  : "Click and speak in English"
              }
              style={{ width: "42px", height: "42px" }}
            >
              {isListening ? "■" : "🎙️"}
            </button>

            <input
              className="form-control form-control-sm"
              placeholder="Type in English or use mic..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />

            <button
              className="btn btn-sm btn-primary"
              onClick={() => sendMessage()}
            >
              Send
            </button>

            <button
              type="button"
              onClick={() => window.speechSynthesis.cancel()}
              className="btn btn-sm btn-danger"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishTutorChat;