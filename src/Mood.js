import React from "react";

const Mood = ({ handleMood, moods }) => {
  return (
    <div className="mood-container">
      Mood:
      {moods.map((mood, index) => (
        <div key={index} className="mood-content">
          <input
            type="radio"
            id={mood}
            name="mood"
            value={mood}
            onClick={handleMood}
          />
          <label htmlFor={mood}>{mood}</label>
        </div>
      ))}
    </div>
  );
};

export default Mood;
