import FrogW from "../FrogWindow/FrogW";
import MusicW from "../MusicWindow/MusicW";
import StatsW from "../StatsWindow/StatsW";
import Taskbar from "../Taskbar/Taskbar";
import TasksW from "../TasksWindow/TasksW";
import TimerW from "../TimerWindow/TimerW";
import "./Desktop.css"
function Desktop(){
    return(
        <div className="desktop">
            <h1>FocusOS</h1>
            <TimerW/>
            <StatsW/>
            <TasksW/>
            <MusicW/>
            <FrogW/>

            <Taskbar/>

        </div>
    );
}

export default Desktop;