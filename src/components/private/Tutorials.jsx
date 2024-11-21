import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  useEffect(() => {
    document.title = "Tutorials";
  }, []);

  const videos = [
    { id: 1, title: "Learn Japanese - Basic Phrases", url: "https://www.youtube.com/embed/rGrBHiuPlT0" }, 
    { id: 2, title: "Learn Japanese - Introduction to Hiragana", url: "https://www.youtube.com/embed/bOUqVC4XkOY" },
    { id: 3, title: "Japanese Grammar for Beginners", url: "https://www.youtube.com/embed/JnoZE51WZg4" },
    { id: 4, title: "Common Japanese Greetings", url: "https://www.youtube.com/embed/k74yjmfFb_A" },
    { id: 5, title: "Japanese Vocabulary - Everyday Words", url: "https://www.youtube.com/embed/KUIWRsVZZZA" },
    { id: 6, title: "How to Count in Japanese", url: "https://www.youtube.com/embed/ZGGufccTLso" },
    { id: 7, title: "Japanese Expressions and Idioms", url: "https://www.youtube.com/embed/W0n-ODPwtzA" },
    { id: 8, title: "Advanced Japanese Sentence Structure", url: "https://www.youtube.com/embed/p9PEIsOzJ5E" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Japanese Language Tutorials</h1>
      <p className="text-gray-600 text-center mb-6">
        Watch these tutorials to improve your Japanese language skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <iframe
              title={video.title}
              src={video.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border rounded-lg shadow"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/start-learning"
          className="bg-[#08ABE9] font-bold hover:bg-green-500 text-white px-6 py-3 rounded-lg shadow transition"
        >
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
