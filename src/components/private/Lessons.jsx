import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Lessons = () => {
  const { lesson_no } = useParams();
  const [lessonDetails, setLessonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState([]); 
  useEffect(() => {

    document.title = `Lesson ${lesson_no}`;
    const fetchLessonData = async () => {

      try {
        const response = await fetch("/vocabulary.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        const filteredWords = data.filter(
          (word) => word.lesson_no === parseInt(lesson_no)
        );
        setLessonDetails(filteredWords);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
        setLessonDetails([]);
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
    fetchLessonData();

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, [lesson_no]);


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
      <h1 className="text-3xl font-bold text-center">Lesson {lesson_no}</h1>
      <p className="text-center mt-4 text-gray-600">
        Learn more about the vocabulary and phrases in Lesson {lesson_no}.
      </p>

      {loading ? (
        <p className="text-center mt-6 text-gray-600">Loading lesson details...</p>
      ) : (
        <div className="mt-6">
          {lessonDetails && lessonDetails.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lessonDetails.map((word) => (
                <li
                  key={word.id}
                  className="border p-4 rounded-lg shadow hover:shadow-lg transition"
                  onClick={() => pronounceWord(word.word)} 
                >
                  <h3 className="text-lg font-bold">{word.word}</h3>
                  <p className="text-gray-500 italic">{word.pronunciation}</p>
                  <p className="text-gray-800">Meaning: {word.meaning}</p>
                  <p className="text-gray-600">Part of Speech: {word.part_of_speech}</p>
                  <p className="text-gray-600 mt-2">
                    <strong>Example:</strong> {word.example}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">
              No details available for this lesson.
            </p>
          )}
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

export default Lessons;
