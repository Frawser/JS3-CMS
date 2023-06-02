import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

// Creates a login page that allows the user to login to their account 
const Login = () => {
    // updateToken is a function that is used to update the token in the AuthContext
    const { updateToken } = useContext(AuthContext);
    // loginData is a state that contains the username and password
    const [loginData, setLoginData] = useState({
        userName: "",
        password: "",
    });
    
    // useNavigate is a function that is used to navigate to a different page
    const navigate = useNavigate();

    // handleChange is a function that is used to update the loginData state
    const handleChange = (e) => {
        setLoginData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            };
        });
    };

    // handleSubmit is a function that is used to submit the loginData state to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:7777/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });
        const data = await res.json();
        updateToken(data.token);
        console.log(data.token);
        navigate("/");
    };

    // Returns a login form that allows the user to login to their account
    return (
        <div className="contianer mb-3 login">
            <div className="mb-3">
                <p className="position-absolute top-20 start-50 translate-middle-x">Please Login to Your Account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div>
                        <label htmlFor="userName" className="form-label mt-4">Username*</label>  
                    </div>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        value={loginData.userName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="password">Password*</label>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input type="checkbox" name="checkbox" id="remember" className="form-check-input m-2"/>
                    <label htmlFor="checkbox" className="from-label m-1">Please keep me logged in</label>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
