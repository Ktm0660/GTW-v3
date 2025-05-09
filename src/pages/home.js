import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import "../styles/home.css";
import { motion } from "framer-motion";


export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const games = [
    {
      id: "pattern",
      title: "Pattern Guessing Game",
      description: "Test your logic with sequences and uncover hidden rules.",
      route: "/game",
      status: "live",
      category: "solo",
      emoji: "🧩",
      color: "#ff5e5e"
    },
    {
      id: "IceCream",
      title: "Ice Cream Battle",
      description: "Maximize your profits while working against your opponent.",
      route: "/icecreamgame",
      status: "live",
      category: "vs-computer",
      emoji: "🍦",
      color: "#ff9800"
    },
    {
      id: "logic101",
      title: "Intro to Logical Fallacies",
      description: "Learn how flawed arguments are formed and detected.",
      route: "/learn/fallacies",
      status: "live",
      category: "education",
      emoji: "📚",
      color: "#4caf50"
    },
    {
      id: "analysis",
      title: "Thinking Insights",
      description: "Explore aggregated thinking trends across all games.",
      route: "/analysis",
      status: "live",
      category: "data",
      emoji: "📊",
      color: "#673ab7"
    }
  ];
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>🧠 Critical Thinking Hub</h1>
        {user && (
          <p className="welcome">
            Welcome, {user.displayName || "Thinker"}!
          </p>
        )}
        <p className="subtext">
          Choose a section below to play games, sharpen your mind, and explore data.
        </p>
      </div>

      {/* Single Player Games */}
      < div className="section solo">
        <h2>🧩 Single Player Games</h2>
        <div className="game-grid">
          {games
            .filter((g) => g.category === "solo" && g.status === "live")
            .map((game) => (
              <motion.div
                key={game.id}
                className="game-card"
                onClick={() => navigate(game.route)}
                style={{ borderLeft: `6px solid ${game.color}` }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Challenge the Computer */}
      <div className="section vs-computer">
        <h2>🤖 Multiplayer Games</h2>
        <div className="game-grid">
          {games
            .filter((g) => g.category === "vs-computer" && g.status === "live")
            .map((game) => (
              <motion.div
                key={game.id}
                className="game-card"
                onClick={() => navigate(game.route)}
                style={{ borderLeft: `6px solid ${game.color}` }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Learn & Train */}
      <div className="section education">
        <h2>📚 Learn and Develop Critical Thinking Skills</h2>
        <div className="game-grid">
          {games
            .filter((g) => g.category === "education" && g.status === "live")
            .map((game) => (
              <motion.div
                key={game.id}
                className="game-card"
                onClick={() => navigate(game.route)}
                style={{ borderLeft: `6px solid ${game.color}` }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Thinking Insights */}
      <div className="section data">
        <h2>📊 Insights</h2>
        <div className="game-grid">
          {games
            .filter((g) => g.category === "data" && g.status === "live")
            .map((game) => (
              <motion.div
                key={game.id}
                className="game-card"
                onClick={() => navigate(game.route)}
                style={{ borderLeft: `6px solid ${game.color}` }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
