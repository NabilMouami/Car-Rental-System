import React, { useState } from "react"
import './Login.css'
import axios from "axios"
import { Link, useHistory } from "react-router-dom"

const Login = () => {
    const [showInfo, setShowInfo] = useState(true);
    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async () => {
       await  axios.post("http://localhost:8282/login", user)
        .then(res => {
            alert(res.data.message)
            history.push("/")
        })

    }
  
  
    return (
      
        <div className="login-form-container">
       {showInfo && 
         <>
            <Link to="/"><span class="fas fa-times" id="close-login-form" onClick={() => setShowInfo(!showInfo)}></span></Link>
              <form>
                  <h3>user login</h3>
                  <input type="email" name="email"  value={user.email} onChange={handleChange} placeholder="email" className="box" />
                  <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="password" className="box" />
                  <p>forget your password <a>click here</a></p>
                  <input  value="login now" onClick={login} className="btn" />
                  <p>or login with</p>
                  <div className="buttons">
                    <a className="btn">google</a>
                    <a className="btn">facebook</a>
                  </div>
                  <p>don't have an account <a  onClick={() => history.push("/register")}>create one</a></p>
              </form>
            </>
            }
        </div>
    )
}

export default Login;
