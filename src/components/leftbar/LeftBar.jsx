import "./leftbar.scss"
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TimerIcon from '@mui/icons-material/Timer';

const LeftBar = () => {
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <PersonIcon/>
                        <span>User</span>
                    </div>
                    <div className="item">
                        <GroupIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <LocalGroceryStoreIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <PlayArrowIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <TimerIcon/>
                        <span>Friends</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                
                <div className="item">
                        <GroupIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <LocalGroceryStoreIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <PlayArrowIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <TimerIcon/>
                        <span>Friends</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <LocalGroceryStoreIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <PlayArrowIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <TimerIcon/>
                        <span>Friends</span>
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default LeftBar