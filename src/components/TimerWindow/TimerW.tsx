import "../../styles/window.css"

function TimerW(){
  return (
    <div className="window">
      <div className="window-header">
        <span>⏰ Timer.exe</span>
        <span>□ ✕</span>
      </div>

      <div className="window-body">
        <h2>25:00</h2>

        <button>Start</button>
      </div>
    </div>
  );
}

export default TimerW;