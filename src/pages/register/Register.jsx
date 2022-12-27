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
                    <h1>OrBIT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et culpa perspiciatis, saepe asperiores aliquid quisquam atque eaque animi expedita laudantium reprehenderit est, totam eos molestiae quas quia nostrum tempore!</p>
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