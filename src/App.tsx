import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <ScrollingHeading />
        <HeaderSection
          description="Discover exciting English sentences every day and practice real-life communication for confident speaking!"
          descriptionGuj="દરરોજ રોમાંચક અંગ્રેજી વાક્યો શોધો અને આત્મવિશ્વાસપૂર્વક વાતચીત કરવા માટે વાસ્તવિક જીવનની વાર્તાલાપ પ્રેક્ટિસ કરો!"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-I" element={<LessonDetail />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/grammar/:idx" element={<GrammarDetail />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/listening/:lessonId" element={<ListeningDetail />} />
          <Route path="/contacts" element={<ContactInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
