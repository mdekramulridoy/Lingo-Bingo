import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "Lesson 1" },
  { id: 2, title: "Lesson 2" },
  { id: 3, title: "Lesson 3" },
  { id: 4, title: "Lesson 4" },
  { id: 5, title: "Lesson 5" },
  { id: 6, title: "Lesson 6" },
  { id: 7, title: "Lesson 7" },
  { id: 8, title: "Lesson 8" },
  { id: 9, title: "Lesson 9" },
  { id: 10, title: "Lesson 10" },
];

const StartLearning = () => {
    useEffect(() => {
        document.title = "Start-learning";
      }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Start Learning</h1>
      <h2 className="text-xl mt-4 text-center">Choose a Lesson to Begin</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lessons/${lesson.id}`}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-lg font-bold">{lesson.title}</h3>
          </Link>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          to="/tutorials"
          className="px-4 py-2 bg-[#08ABE9] text-white font-bold rounded-lg shadow hover:bg-green-600 transition"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default StartLearning;
