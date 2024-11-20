import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const LessonsPage = () => {
  const { lesson_no } = useParams();
  const lessonId = parseInt(lesson_no);
  const [lessonWords, setLessonWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch("/vocabulary.json");
        if (!response.ok) {
          throw new Error("Failed to fetch vocabulary data.");
        }
        const data = await response.json();
        const filteredWords = data.filter(
          (word) => word.lesson_no === lessonId
        );
        setLessonWords(filteredWords);
      } catch (error) {
        console.error("Error fetching vocabulary data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVocabulary();
  }, [lessonId]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Lesson {lesson_no}</h1>
      <p className="text-center mt-4 text-gray-600">
        Explore and learn vocabulary from Lesson {lesson_no}.
      </p>

      {loading ? (
        <p className="text-center mt-6 text-gray-600">Loading vocabulary...</p>
      ) : (
        <div className="mt-6">
          {lessonWords.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lessonWords.map((word) => (
                <li
                  key={word.id}
                  className="border p-4 rounded-lg shadow hover:shadow-lg transition"
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
              No vocabulary found for this lesson.
            </p>
          )}
        </div>
      )}

      <div className="text-center mt-6">
        <Link
          to="/start-learning"
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Back to Lessons
        </Link>
      </div>
    </div>
  );
};

export default LessonsPage;
