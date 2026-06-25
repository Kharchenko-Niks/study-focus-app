import "../../styles/window.css";

function QuestW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>✅ Daily Quests.exe</span>
        <div className="window-controls">
            <button className="control-btn">_</button>
            <button className="control-btn">□</button>
            <button className="control-btn">✕</button>
        </div>
      </div>

      <div className="window-body">
        <p>☐ Complete 4 focus sessions</p>
        <p>☑ Study for 2 hours</p>
        <p>☑ No phone for 1 hour</p>
      </div>
    </div>
  );
}

export default QuestW;