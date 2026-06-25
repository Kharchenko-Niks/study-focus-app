import "../../styles/window.css";

function HabitW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>📊 Habit Tracker.exe</span>
        <div className="window-controls">
            <button className="control-btn">_</button>
            <button className="control-btn">□</button>
            <button className="control-btn">✕</button>
        </div>
      </div>

      <div className="window-body">
        <p>Weekly progress chart</p>
      </div>
    </div>
  );
}

export default HabitW;