import "../../styles/window.css";

function QuestW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>✅ Daily Quests.exe</span>
        <span>□ ✕</span>
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