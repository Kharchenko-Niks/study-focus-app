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
import "./Desktop.css"
function Desktop(){
    return(
        <div className="desktop">

            <div className="goal">
                <GoalW/>
            </div>

            <div className="timer">
                <TimerW/>
            </div>

            <div className="character">
                <CharacterW/>
            </div>

            <div className="stats">
                <StatsW/>
            </div>

            <div className="habit">
                <HabitW/>
            </div>

            <div className="music">
                <MusicW/>
            </div>

            <div className="quest">
                <QuestW/>
            </div>

            <div className="mode">
                <ModeW/>
            </div>

            <div className="fun">
                <FunW/>
            </div>

            <div className="frog">
                <FrogW/>
            </div>

            <Taskbar/>
        </div>
    );
}

export default Desktop;