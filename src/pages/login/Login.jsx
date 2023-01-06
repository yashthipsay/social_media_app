import { useContext } from "react";
import { AuthContext } from "../../context/authContext"
import "./login.scss"
import {Link} from "react-router-dom"
const Login = () => {
    const {login} = useContext(AuthContext);
    const handleLogin = () => {
        login();
    };
    return (
        <div className="login">
        <div className = "card">
            <div className="left">
                <h1>FPS</h1>
                <p>One of the craziest first person shooter games with lots of different modes to try out. Play with a team or play solo. Different themes to play in and customizing options for your player</p>
                <span>No previous account?</span>
                <Link to ="/register">
                    <button>Register</button>
                    </Link>
                
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
             </div>
        </div>
    )
}

export default Login