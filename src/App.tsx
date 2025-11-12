import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import LessonCard from "./components/LessonCard";
import { lessons } from "../src/mochData/mockLessons";
import LessonDetail from "./components/LessonDetail";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";

function Home() {
  return (
    <>
      <div>
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
        <HeaderSection
          description="Discover exciting English sentences every day and practice real-life communication for confident speaking!"
          descriptionGuj="દરરોજ રોમાંચક અંગ્રેજી વાક્યો શોધો અને આત્મવિશ્વાસપૂર્વક વાતચીત કરવા માટે વાસ્તવિક જીવનની વાર્તાલાપ પ્રેક્ટિસ કરો!"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:lessonId" element={<LessonDetail />} />
          <Route path="/contacts" element={<ContactInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
