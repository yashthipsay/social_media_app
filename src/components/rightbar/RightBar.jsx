import "./rightbar.scss"

const RightBar = ()=>{
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Suggestions</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src="https://i.pinimg.com/736x/7f/84/87/7f8487bb71d3d9b375ff4729f71415c5.jpg" alt="" />
                            <span>Vedhas</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src="https://th.bing.com/th/id/OIP.-nE-rrZY5Ylii9qyvFXbLgHaLC?pid=ImgDet&rs=1" alt="" />
                            <span>Tejas</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src="https://i.pinimg.com/736x/7f/84/87/7f8487bb71d3d9b375ff4729f71415c5.jpg" alt="" />
                            <p>
                                <span>Vedhas</span> changed their status
                            </p>
                            
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userinfo">
                            
                            
                            <img src="https://th.bing.com/th/id/OIP.-nE-rrZY5Ylii9qyvFXbLgHaLC?pid=ImgDet&rs=1" alt="" />
                            <span>Tejas</span>
                            <div className="online">
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            
                            
                            <img src="https://th.bing.com/th/id/OIP.bF57BuRosYPuXrK_xJzOQAHaHc?pid=ImgDet&rs=1" alt="" />
                            <span>Sumedh</span>
                            <div className="online">
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar