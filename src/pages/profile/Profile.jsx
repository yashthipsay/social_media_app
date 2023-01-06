import "./profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://th.bing.com/th/id/OIP.90BZDhbh0_kHTtpDE7CP3wHaDR?w=297&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="cover" />
                <img src="https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uinfo">
                    <div className="left">
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                        <PinterestIcon/>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile