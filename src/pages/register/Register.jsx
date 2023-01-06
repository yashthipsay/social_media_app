import "./register.scss"
import {Link} from "react-router-dom"
const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Register</h1>
                    
                    <form action="">
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>

                    </form>
                    <button className="button">Create Account</button>
                </div>
                <div className="right">
                    <h1>FPS</h1>
                    <p>One of the craziest first person shooter games with lots of different modes to try out. Play with a team or play solo. Different themes to play in and customizing options for your player</p>
                    <span>Already have an account ?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Register