import { useState } from "react";

import CharacterW from "../CharacterWindow/CharacterW";
import FrogW from "../FrogWindow/FrogW";
import FunW from "../FunWindow/FunW";
import GoalW from "../GoalWindow/GoalW";
import HabitW from "../HabitWindow/HabitW";
import ModeW from "../ModeWindow/ModeW";
import MusicW from "../MusicWindow/MusicW";
import QuestW from "../QuestWindow/QuestW";
import StatsW from "../StatsWindow/StatsW";
import Taskbar from "../Taskbar/Taskbar";
import TimerW from "../TimerWindow/TimerW";

import Window from "../Window/Window";

import "./Desktop.css";

interface WindowsState {
  goal: boolean;
  character: boolean;
  habit: boolean;
  quest: boolean;
  mode: boolean;
  fun: boolean;
  frog: boolean;
  music: boolean;
}

function Desktop() {
  const [windows, setWindows] = useState<WindowsState>({
    goal: false,
    character: false,
    habit: false,
    quest: false,
    mode: false,
    fun: false,
    frog: false,
    music: false,
  });

  function openWindow(name: keyof WindowsState) {
    setWindows((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function closeWindow(name: keyof WindowsState) {
    setWindows((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  return (
    <div className="desktop">
      <div className="desktop-icons">
        <button onClick={() => openWindow("goal")}>
          <span>🎯</span>
          <p>Goals</p>
        </button>

        <button onClick={() => openWindow("character")}>
          <span>🧙</span>
          <p>Character</p>
        </button>

        <button onClick={() => openWindow("habit")}>
          <span>📊</span>
          <p>Habits</p>
        </button>

        <button onClick={() => openWindow("quest")}>
          <span>📜</span>
          <p>Quests</p>
        </button>

        <button onClick={() => openWindow("mode")}>
          <span>⚙</span>
          <p>Modes</p>
        </button>

        <button onClick={() => openWindow("fun")}>
          <span>🎮</span>
          <p>Fun</p>
        </button>

        <button onClick={() => openWindow("frog")}>
          <span>🐸</span>
          <p>Frog</p>
        </button>

        <button onClick={() => openWindow("music")}>
          <span>🎵</span>
          <p>Music</p>
        </button>
      </div>

      <div className="timer">
        <TimerW />
      </div>

      <div className="stats">
        <StatsW />
      </div>

      {windows.goal && (
        <Window title="Goals" onClose={() => closeWindow("goal")}>
          <GoalW />
        </Window>
      )}

      {windows.character && (
        <Window title="Character" onClose={() => closeWindow("character")}>
          <CharacterW />
        </Window>
      )}

      {windows.habit && (
        <Window title="Habits" onClose={() => closeWindow("habit")}>
          <HabitW />
        </Window>
      )}

      {windows.quest && (
        <Window title="Quests" onClose={() => closeWindow("quest")}>
          <QuestW />
        </Window>
      )}

      {windows.mode && (
        <Window title="Modes" onClose={() => closeWindow("mode")}>
          <ModeW />
        </Window>
      )}

      {windows.fun && (
        <Window title="Fun" onClose={() => closeWindow("fun")}>
          <FunW />
        </Window>
      )}

      {windows.frog && (
        <Window title="Frog" onClose={() => closeWindow("frog")}>
          <FrogW />
        </Window>
      )}

      {windows.music && (
        <Window title="Music" onClose={() => closeWindow("music")}>
          <MusicW />
        </Window>
      )}

      <Taskbar />
    </div>
  );
}

export default Desktop;
