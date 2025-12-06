import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderSection from "./components/Header/HeaderSection";
// import { lessons } from "../src/mochData/mockLessons";
import Footer from "./components/Footer/Footer";
import ContactInfo from "./components/ContactInfo";
// import ScrollingHeading from "./components/ScrollingHeading";
import GrammarDetail from "./components/Grammar/GrammarDetail";
import Listening from "./components/Listening/Listening";
import LessonCard from "./components/Basic/LessonCard";
import LessonDetail from "./components/Basic/LessonDetail";
import ListeningDetail from "./components/Listening/ListeningDetail";
import Grammar from "./components/Grammar/Grammar";
import ConvertionPage from "./components/Conversation/ConversationPage";
import ConversationDetails from "./components/Conversation/ConversationDetails";
import WordMatchApp from "./components/Games/components/WordMatchQuiz/WordMatch";
import SentenceBuilderApp from "./components/Games/components/SentenceBuilder/SentenceBuilderApp";
import PictureWordApp from "./components/Games/components/PictureWord/PictureWordApp";
import GamesHome from "./components/Games/components/Home";
import { ThemeProvider } from "./components/context/ThemeContext";
import EnglishTutorChat from "./components/AI/EnglishTutorChat";
import SpellingChallengeApp from "./components/Games/components/SpellingChallenge/SpellingChallengeApp";
import ListeningChallengeApp from "./components/Games/components/ListeningChallenge/ListeningChallengeApp";
import WordUnscrambleApp from "./components/Games/components/WordUnscramble/WordUnscrambleApp";
import GrammarFixerApp from "./components/Games/components/GrammarFixer/GrammarFixerApp";
import ClozeTestApp from "./components/Games/components/ClozeTestCard/ClozeTestApp";
import EmojiGuessApp from "./components/Games/components/EmojiGuessCard/EmojiGuessApp";
import FlashcardFlipApp from "./components/Games/components/FlashcardCard/FlashcardFlipApp";
import WordSortingApp from "./components/Games/components/WordSortingBoard/WordSortingApp";
import { Provider } from "react-redux";
import { store } from "./store";
import { HomeLesson } from "./types/types";
import MultiCircleSpinner from "./components/MultiCircleSpinner";

function Home() {
  const [homeLessons, setHomeLessons] = useState<HomeLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/homeData.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load home data");
        return res.json();
      })
      .then((data) => {
        setHomeLessons(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <MultiCircleSpinner fullScreen size={96} />;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">{error}</div>;
  }

  return (
    <>
      <div className="row m-1">
        {homeLessons.map((lesson) => (
          <LessonCard
            key={lesson.title}
            imageSrc={lesson.imageSrc}
            title={lesson.title}
            description={lesson.description}
            lessonUrl={lesson.lessonUrl}
          />
        ))}
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        {/* <ScrollingHeading /> */}
        {location.pathname === "/" && (
          <HeaderSection description="Discover exciting English sentences every day and practice real-life communication for confident speaking!" />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-I" element={<LessonDetail />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/grammar/:idx" element={<GrammarDetail />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/listening/:lessonId" element={<ListeningDetail />} />
          <Route path="/contacts" element={<ContactInfo />} />
          <Route path="/convertion" element={<ConvertionPage />} />
          <Route path="/convertion/:id" element={<ConversationDetails />} />

          <Route path="/games" element={<GamesHome />} />
          <Route path="/games/word-match" element={<WordMatchApp />} />
          <Route
            path="/games/sentence-builder"
            element={<SentenceBuilderApp />}
          />
          <Route path="/games/picture-word" element={<PictureWordApp />} />
          <Route
            path="/games/spelling-challenge"
            element={<SpellingChallengeApp />}
          />
          <Route
            path="/games/listening-challenge"
            element={<ListeningChallengeApp />}
          />
          <Route
            path="/games/word-unscramble"
            element={<WordUnscrambleApp />}
          />
          <Route path="/games/gramma-fixer" element={<GrammarFixerApp />} />
          <Route path="/games/cloze-test" element={<ClozeTestApp />} />
          <Route path="/games/emoji-guess" element={<EmojiGuessApp />} />
          <Route path="/games/flashcard-flip" element={<FlashcardFlipApp />} />
          <Route path="/games/word-sorting" element={<WordSortingApp />} />
        </Routes>
        <Footer />
        {!showChat && (
          <>
            <button className="chatbot-btn" onClick={() => setShowChat(true)}>
              A💬J
            </button>
          </>
        )}

        {showChat && (
          <div className="chatbot-popup">
            <button
              className="chatbot-close-btn"
              onClick={() => setShowChat(false)}
            >
              ✖
            </button>

            <EnglishTutorChat onClose={() => setShowChat(false)} />
          </div>
        )}
      </div>
    </Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
