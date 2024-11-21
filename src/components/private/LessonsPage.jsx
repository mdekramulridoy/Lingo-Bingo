import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const LessonsPage = () => {
  const { lesson_no } = useParams();
  const lessonId = parseInt(lesson_no, 10);
  const [lessonWords, setLessonWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState([]);

  const difficultyColors = {
    easy: "bg-green-100 border-green-500",
    medium: "bg-yellow-100 border-yellow-500",
    hard: "bg-red-100 border-red-500",
  };

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch("/vocabulary.json");
        if (!response.ok) {
          throw new Error("Failed to fetch vocabulary data.");
        }
        const data = await response.json();
        const filteredWords = data.filter((word) => word.lesson_no === lessonId);
        setLessonWords(filteredWords);
      } catch (error) {
        console.error("Error fetching vocabulary data:", error);
      } finally {
        setLoading(false);
      }
    };

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    loadVoices();

    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    fetchVocabulary();

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, [lessonId]);

  const pronounceWord = (word) => {
    if (voices.length === 0) {
      alert("Voices are still loading, please try again in a moment.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP";

    const japaneseVoice = voices.find((voice) => voice.lang.startsWith("ja"));
    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    } else {
      console.log("Japanese voice not found.");
    }

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Lesson {lesson_no}</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading vocabulary...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {lessonWords.map((word) => (
            <div
              key={word.id}
              className={`card p-6 border rounded-lg shadow hover:shadow-lg cursor-pointer transition ${
                difficultyColors[word.difficulty] || ""
              }`}
              onClick={() => pronounceWord(word.word)}
            >
              <h2 className="text-xl font-semibold">{word.word}</h2>
              <p>{word.meaning}</p>
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-6">
        <Link
          to="/start-learning"
          className="px-4 py-2 bg-[#08ABE9] text-white font-bold rounded-lg shadow hover:bg-green-500 transition"
        >
          Back to Lessons
        </Link>
      </div>
    </div>
  );
};

export default LessonsPage;
