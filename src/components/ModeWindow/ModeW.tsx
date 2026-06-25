import "../../styles/window.css";

function ModeW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>🎯 Choose Mode.exe</span>
        <div className="window-controls">
            <button className="control-btn">_</button>
            <button className="control-btn">□</button>
            <button className="control-btn">✕</button>
        </div>
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