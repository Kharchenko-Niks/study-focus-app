import "../../styles/window.css";

function CharacterW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>🧙 Character Status.exe</span>
        <div className="window-controls">
            <button className="control-btn">_</button>
            <button className="control-btn">□</button>
            <button className="control-btn">✕</button>
        </div>
      </div>

      <div className="window-body">
        <h3>Lv. 3</h3>

        <p>Focus Novice</p>

        <p>120 / 300 XP</p>

        <p>STR 12 | INT 18 | WIS 15</p>
      </div>
    </div>
  );
}

export default CharacterW;