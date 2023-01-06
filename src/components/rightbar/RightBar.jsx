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
                            <span>User 1</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src="https://th.bing.com/th/id/OIP.gEHyJOz-Suihh_Z6Pf5fxQHaHZ?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                            <span>User 2</span>
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
                                <span>User 1</span> changed their status
                            </p>
                            
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userinfo">
                            
                            
                            <img src="https://th.bing.com/th/id/OIP.mwpIDn24E2Wab0J_2M9ueQHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                            <span>User 2</span>
                            <div className="online">
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            
                            
                            <img src="https://th.bing.com/th/id/OIP.bF57BuRosYPuXrK_xJzOQAHaHc?pid=ImgDet&rs=1" alt="" />
                            <span>User 3</span>
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