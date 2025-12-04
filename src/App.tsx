import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderSection from "./components/Header/HeaderSection";
import { lessons } from "../src/mochData/mockLessons";
import Footer from "./components/Footer/Footer";
import ContactInfo from "./components/ContactInfo";
import ScrollingHeading from "./components/ScrollingHeading";
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

function Home() {
  return (
    <>
      <div className="row m-1">
        {lessons.map((lesson) => (
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

  return (
    <div className="main">
      <Header />
      <ScrollingHeading />
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
      </Routes>
      <Footer />
    </div>
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
