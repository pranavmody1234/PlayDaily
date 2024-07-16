import './trivia_game.css';
function Celebration() {
    return (
      <div className="celebration">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `sparkle ${Math.random() * 2 + 2}s linear ${Math.random() * 2}s infinite`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
            }}
          ></div>
        ))}
      </div>
    );
  }
  
  export default Celebration;