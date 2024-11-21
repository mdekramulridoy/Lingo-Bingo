import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div className="about-container bg-gradient-to-r from-[#08ABE9]  to-[#0080b3] text-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Language Learning App!</h1>
        <p className="text-lg mb-6">
          Learning a new language can be challenging, but we're here to make it easier and more fun! Our
          interactive Japanese language learning platform is designed to help you expand your vocabulary and improve your communication skills.
        </p>
        <p className="text-lg mb-6">
          Whether you're a beginner or an advanced learner, our app provides personalized lessons to help you master the Japanese language at your own pace.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
          <div className="feature-box p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Interactive Vocabulary</h3>
            <p>Learn Japanese vocabulary through fun, interactive exercises that keep you engaged and motivated.</p>
          </div>
          <div className="feature-box p-6 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p>Our app tailors lessons to your skill level, so you can learn at your own pace and progress faster.</p>
          </div>

        </div>
        <div className="mt-8">
          <p className="text-lg">
            Start learning today and unlock a world of opportunities with the Japanese language. Sign in to get started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
