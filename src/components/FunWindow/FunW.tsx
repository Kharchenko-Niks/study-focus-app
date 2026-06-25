import "../../styles/window.css";

function FunW() {
  return (
    <div className="window">
      <div className="window-header">
        <span>🐸 Fun Mode.exe</span>
        <div className="window-controls">
            <button className="control-btn">_</button>
            <button className="control-btn">□</button>
            <button className="control-btn">✕</button>
        </div>
      </div>

      <div className="window-body">
        <button>🎲 Dice</button>

        <button>🕯 Candle</button>

        <button>🐸 Frog</button>
      </div>
    </div>
  );
}

export default FunW;