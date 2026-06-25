import "../../styles/window.css";

function FrogW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>🐸 Frog.exe</span>
        <span>□ ✕</span>
      </div>

      <div className="window-body">
        <h3>Frog Companion</h3>

        <p>
          Your study buddy is waiting!
        </p>

        <button>Feed Frog</button>
      </div>
    </div>
  );
}

export default FrogW;