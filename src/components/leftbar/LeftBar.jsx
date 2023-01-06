import "./leftbar.scss"
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TimerIcon from '@mui/icons-material/Timer';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RecommendIcon from '@mui/icons-material/Recommend';

const LeftBar = () => {
    const {currentUser} = useContext(AuthContext);
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <PersonIcon/>
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <GroupIcon/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <LocalGroceryStoreIcon/>
                        <span>Shop</span>
                    </div>
                    <div className="item">
                        <PlayArrowIcon/>
                        <span>Feed</span>
                    </div>
                    <div className="item">
                        <TimerIcon/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                
                <div className="item">
                        <WatchLaterIcon/>
                        <span>Watch later</span>
                    </div>
                    <div className="item">
                        <ThumbUpIcon/>
                        <span>Liked</span>
                    </div>
                    <div className="item">
                        <FavoriteIcon/>
                        <span>Favorite</span>
                    </div>
                    <div className="item">
                        <RecommendIcon/>
                        <span>Recommended</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <LocalGroceryStoreIcon/>
                        <span>Some more icons</span>
                    </div>
                    <div className="item">
                        <PlayArrowIcon/>
                        <span>Some more icons</span>
                    </div>
                    <div className="item">
                        <TimerIcon/>
                        <span>Some more icons</span>
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default LeftBar