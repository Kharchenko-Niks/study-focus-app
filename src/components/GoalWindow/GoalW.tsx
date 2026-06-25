import "../../styles/window.css";

function GoalW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>📌 Today's Goal.exe</span>
        <div className="window-controls">
            <button className="control-btn">_</button>
            <button className="control-btn">□</button>
            <button className="control-btn">✕</button>
        </div>
      </div>

      <div className="window-body">
        <h3>Study Goal</h3>

        <p>2h 30m / 4h</p>

        <progress value={63} max={100}></progress>

        <p>3 / 6 sessions completed</p>
      </div>
    </div>
  );
}

export default GoalW;