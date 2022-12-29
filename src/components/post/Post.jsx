import "./post.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";


const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const liked = true;
    return (
        <div className="post">
            <div className="container">

            <div className="user">
                <div className="userInfo">
                    <img src={post.img} alt="" />
                    <div className="details">
                        <Link to = {`/profile/${post.userId}`} style = {{textDecoration: "none", color: "inherit"}}>
                            <span className="name">{post.name}</span>
                            
                        </Link>
                        <span className = "date">1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="content">
                
                <p>{post.desc}</p>
                <img src={post.img} alt=""/>

            </div>
                <div className="info">
                    <div className="item">
                    {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    16 likes
                    </div>
                    <div className="item" onClick = {() => setCommentOpen(!commentOpen)}>
                    <ChatBubbleIcon/>
                    Comment
                    </div>
                    <div className="item">
                    <ShareIcon/>
                    Share

                    </div>
                </div>
                {commentOpen && <Comments/>}

        </div>
        </div>
        


    )
}

export default Post