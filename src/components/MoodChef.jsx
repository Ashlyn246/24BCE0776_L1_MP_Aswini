import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoodChef.css";

const MOODS = [
  { emoji: "😄", label: "Happy", color: "#FECA57" },
  { emoji: "😴", label: "Tired", color: "#A29BFE" },
  { emoji: "🔥", label: "Hungry", color: "#FF6B6B" },
  { emoji: "❄️", label: "Cooling down", color: "#48DBFB" },
  { emoji: "🥰", label: "Romantic", color: "#FD79A8" },
  { emoji: "💪", label: "Energetic", color: "#55EFC4" },
  { emoji: "😔", label: "Sad", color: "#B2BEC3" },
  { emoji: "🤩", label: "Celebrating", color: "#FDCB6E" },
];

export default function MoodChef() {
  const navigate = useNavigate();

  const [selectedMood, setSelectedMood] = useState(null);
  const [result, setResult] = useState(null);

  const generateResult = () => {
    if (!selectedMood) return;

    let dishes = [];

    switch (selectedMood.label) {
      case "Happy":
        dishes = [
          { name: "Ice Cream", price: 100, reason: "Sweet treats boost your joy!" },
          { name: "Falooda", price: 130, reason: "Colorful and fun like your mood." },
        ];
        break;

      case "Hungry":
        dishes = [
          { name: "South Indian Meals", price: 180, reason: "A full meal to satisfy hunger." },
          { name: "Paneer Butter Masala", price: 250, reason: "Rich and filling delight." },
        ];
        break;

      case "Tired":
        dishes = [
          { name: "Idli Sambar", price: 80, reason: "Light and easy to digest." },
          { name: "Lemon Juice", price: 80, reason: "Refreshing and energizing." },
        ];
        break;

      case "Romantic":
        dishes = [
          { name: "Tiramisu", price: 180, reason: "Perfect dessert for special moments." },
          { name: "Mint Mojito", price: 120, reason: "Cool and classy drink." },
        ];
        break;
      case "Cooling down":
        dishes = [
          { name: "Ice Cream", price: 100, reason: "Perfect for cooling down and happiness." },
          { name: "Mint Mojito", price: 120, reason: "Cool and classy drink." },
        ];
        break;

      default:
        dishes = [
          { name: "Masala Dosa", price: 120, reason: "Always a great choice!" },
          { name: "Veg Fried Rice", price: 150, reason: "Comfort food for any mood." },
        ];
    }

    setResult({
      tagline: "Perfect food for your mood ✨",
      dishes,
      flavorNote: "A balanced mix of taste and comfort. Every bite matches your vibe!",
    });
  };

  const reset = () => {
    setSelectedMood(null);
    setResult(null);
  };

  return (
    <div className="moodchef-page">

      {/* CLOSE BUTTON */}
      <button className="close-top-btn" onClick={() => navigate("/")}>
        ✖
      </button>

      {/* LEFT PANEL */}
      <div className="moodchef-left">
        <h1 className="left-title">Mood<br />Chef</h1>
        <p className="left-desc">
          Tell us your mood and get the perfect dish instantly.
        </p>
        <div className="left-icon">🍽️</div>
      </div>

      {/* RIGHT PANEL */}
      <div className="moodchef-right">
        <div className="moodchef-card">

          {!result ? (
            <>
              <h2 className="card-title">How are you feeling?</h2>
              <p className="card-sub">Pick your mood 👇</p>

              {/* MOODS */}
              <div className="mood-grid">
                {MOODS.map((m) => (
                  <button
                    key={m.label}
                    className={`mood-btn ${
                      selectedMood?.label === m.label ? "mood-btn-active" : ""
                    }`}
                    style={
                      selectedMood?.label === m.label
                        ? { background: m.color, borderColor: m.color }
                        : {}
                    }
                    onClick={() => setSelectedMood(m)}
                  >
                    <span className="mood-emoji">{m.emoji}</span>
                    <span className="mood-label">{m.label}</span>
                  </button>
                ))}
              </div>

              <button
                className="ask-btn"
                onClick={generateResult}
                disabled={!selectedMood}
              >
                Get Recommendation 🍳
              </button>
            </>
          ) : (
            <div className="result-section">

              <div className="mood-badge">
                {selectedMood.emoji} {selectedMood.label}
              </div>

              <p className="result-tagline">"{result.tagline}"</p>

              <div className="dish-list">
                {result.dishes.map((d, i) => (
                  <div className="dish-card" key={i}>
                    <div className="dish-top">
                      <span className="dish-name">{d.name}</span>
                      <span className="dish-price">₹{d.price}</span>
                    </div>
                    <p className="dish-reason">{d.reason}</p>
                  </div>
                ))}
              </div>

              <div className="flavor-box">
                <span className="flavor-title">🌿 Flavor Profile</span>
                <p className="flavor-text">{result.flavorNote}</p>
              </div>

              <button className="reset-btn" onClick={reset}>
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}