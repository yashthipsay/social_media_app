import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import Email from "@mui/icons-material/Email";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useContext } from "react";
const NavBar = ()=>{

    const { toggle, darkMode } = useContext(DarkModeContext);
    return(
        <div className="navbar">
            <div className="left">
                <Link to = "/" style={{textDecoration: "none"}}>
                    <img src="https://th.bing.com/th/id/OIP._Z2tsSUtsQw2oZGrNNXQiQHaHa?pid=ImgDet&rs=1" alt="" style={{height: "50px", width: "50px"}} />
                    </Link>
                    <HomeIcon/>
                    {darkMode ? <DarkModeIcon onClick={toggle}/> : WbSunnyIcon}
                    <LightModeIcon/>
                    <AppsIcon/>
                    <div className="search">
                        <SearchIcon/>
                        <input type="text" placeholder="Search"/>
                    </div>
                    
                
            </div>
            <div className="right">
                <EmailIcon/>
                <PersonIcon/>
                <NotificationsNoneIcon/>
                <div className="user">
                    <img src="https://i0.wp.com/coinyuppie.com/wp-content/uploads/2021/07/162631682664400.png?ssl=1" alt="" />
                    <span>Profile</span>
                </div>

            </div>
        </div>
    )
}

export default NavBar