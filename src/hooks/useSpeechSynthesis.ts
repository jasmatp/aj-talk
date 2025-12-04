import { useCallback, useEffect, useState } from "react";

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isBrowser =
    typeof window !== "undefined" && "speechSynthesis" in window;

  const cancel = useCallback(() => {
    if (!isBrowser) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isBrowser]);

  const speak = useCallback(
    (text: string, lang: string = "en-US") => {
      if (!isBrowser) {
        console.warn("Speech Synthesis not supported in this browser");
        return;
      }

      // stop anything currently speaking
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isBrowser]
  );

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (isBrowser) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isBrowser]);

  return { speak, cancel, isSpeaking, supported: isBrowser };
};
