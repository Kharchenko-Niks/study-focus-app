import { useEffect, useState } from "react";
import "../../styles/window.css";

const POMODORO_TIME = 25 * 60;

function TimerW() {
  const [seconds, setSeconds] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    secs
  ).padStart(2, "0")}`;

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(POMODORO_TIME);
  };

  return (
    <div className="window">
      <div className="window-header">
        <span>⏰ Timer.exe</span>
        <span>□ ✕</span>
      </div>

      <div className="window-body">
        <h2>{formattedTime}</h2>

        <div className="timer-buttons">
          <button onClick={handleStart}>
            ▶ Start
          </button>

          <button onClick={handlePause}>
            ⏸ Pause
          </button>

          <button onClick={handleReset}>
            ↺ Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerW;