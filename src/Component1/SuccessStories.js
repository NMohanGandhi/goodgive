import React, { useEffect, useState } from 'react';
import './SuccessStories.css';
import AshaStory from '../assets/AshaStory.png';
import PintoStory from '../assets/PintoStory.png';
import AnandStory from '../assets/AnandStory.png';

function SuccessStories() {
  const stories = [
    {
      name: "Asha’s Story",
      image: AshaStory,
      quote: "I never thought I’d need help, but when I lost my job and faced eviction, Goodgive provided us with food and connected us to other resources. Thanks to them, we’re starting to rebuild our lives.",
    },
    {
      name: "Pinto’s Story",
      image: PintoStory,
      quote: "I lost my job during the pandemic and was struggling to feed my children. Goodgive provided us with nutritious meals every month, which gave me one less thing to worry about. I am so grateful for your support.",
      highlight: true,
    },
    {
      name: "Anand’s Story",
      image: AnandStory,
      quote: "When my father became ill, I had to take time off work to care for him. The food I received from the food bank allowed me to focus on his recovery without the stress of how to feed my family.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with Pinto's story (index 1)

  // Auto-change story every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [stories.length]);

  const goToPrevious = () => {
    const isFirstStory = currentIndex === 0;
    const newIndex = isFirstStory ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastStory = currentIndex === stories.length - 1;
    const newIndex = isLastStory ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="success-stories">
      <div className="success-stories-container">
        <h2>Success Stories</h2>
        <p className="success-stories-description">
          Your donations and support help change lives. Here are just a few stories of 
          individuals whose lives have been touched by our work:
        </p>

        <div className="stories-carousel">
          <button className="nav-button prev" onClick={goToPrevious} aria-label="Previous story">
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {stories.map((story, index) => {
            const isVisible = 
              index === currentIndex || 
              index === (currentIndex - 1 + stories.length) % stories.length || 
              index === (currentIndex + 1) % stories.length;

            let position = "";
            if (index === currentIndex) {
              position = "active";
            } else if (index === (currentIndex - 1 + stories.length) % stories.length) {
              position = "prev";
            } else if (index === (currentIndex + 1) % stories.length) {
              position = "next";
            }

            if (!isVisible) return null;

            return (
              <div key={index} className={`story-card ${position}`}>
                <img src={story.image} alt={story.name} className="story-image" />
                <h3 className="story-name">{story.name}</h3>
                {position === "active" && <span className="quote-icon">❝</span>}
                <p className="story-quote">{story.quote}</p>
              </div>
            );
          })}

          <button className="nav-button next" onClick={goToNext} aria-label="Next story">
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
