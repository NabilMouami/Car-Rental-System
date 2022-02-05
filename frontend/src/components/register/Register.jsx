import React, { useState,useEffect } from "react"
import "./Register.css"
import FileUploadScreen from "../../screens/FileUploadScreen"
import { getSingleFiles } from "../../data/api"
import { useSelector } from 'react-redux';

import axios from "axios"
import { useDispatch } from "react-redux"
import { createimg } from "../../redux/useractions"

import { createuser } from "../../redux/useractions"
import { Link,useHistory } from "react-router-dom"


const Register = () => {
    const [singleFiles, setSingleFiles] = useState([]);

    const userinfor = useSelector(state => state.userinfo)
    const {userinformations} = userinfor;
    const {image} = userinfor;



    const dispatch = useDispatch()
    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
        })
    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
            await dispatchimg(singleFiles[singleFiles.length -1])
        } catch (error) {
          console.log(error);
        }
      }
  
    const dispatchimg = (image) => {
        dispatch(createimg(image))
      }
  
      dispatch(createuser(user))
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
     
    useEffect(() => {
       getSingleFileslist()
    },[])
  
    const register = async() => {
        const { name, email, password, reEnterPassword } = user
       
        console.log(user)
    
        if( name && email && password && (password === reEnterPassword)){
          await  axios.post("http://localhost:8282/register", user)
            .then( res => {
                
                 dispatch(createuser(user))

                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className='buttons'>
                    <FileUploadScreen getsingle={() => getSingleFileslist()}    />
                  </div>

            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register