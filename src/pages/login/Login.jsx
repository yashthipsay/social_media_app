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
                <h1>OrBIT</h1>
                <p>A unique way of analyzing and and gaining insights about the brain. We are taking a step towards disrupting the way aptitude works and provide a unique way of finding what you can take up as your career</p>
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