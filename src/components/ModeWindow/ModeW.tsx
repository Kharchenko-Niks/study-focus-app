import "../../styles/window.css";

function ModeW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>🎯 Choose Mode.exe</span>
        <span>□ ✕</span>
      </div>

      <div className="window-body">
        <button>🍅 Pomodoro</button>

        <button>🧠 Deep Work</button>

        <button>✏️ Custom</button>
      </div>
    </div>
  );
}

export default ModeW;