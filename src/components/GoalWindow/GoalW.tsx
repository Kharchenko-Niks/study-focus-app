import "../../styles/window.css";

function GoalW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>📌 Today's Goal.exe</span>
        <span>□ ✕</span>
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