import React, {useState,useEffect} from 'react';
import logo from '../images/Car01.jpeg'
import './Home.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import data from './data';
import Footer from './footer/Footer';
import {getSingleFiles} from '../data/api';
import { AiOutlineUserAdd } from "react-icons/ai";


function Home() {
    const userinfor = useSelector(state => state.userinfo)
    const {userinformations} = userinfor;
    const {image} = userinfor;
    const [user, setuser] = useState([]);
    console.log(user)
    const [singleFiles, setSingleFiles] = useState([{
        fileName
:
"antigone.jpg",
filePath
:
"uploads/2021-12-29T13-58-21.275Z-antigone.jpg",
fileType
:
"image/jpeg",
fileSize
:
"5.46 KB"
    }]);
    console.log(singleFiles)

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
          console.log(error);
        }
      }       
    const openMenu = () => {
        let menu = document.querySelector('#menu-btn');
        menu.classList.toggle('fa-times');
      };
      useEffect(async () => {
     
      setuser(userinformations);
      await  getSingleFileslist();
        
      }, []);
      
    return (
        <div>
            <header className="header">
                
                <i id="menu-btn" class="fas fa-bars" onClick={openMenu}></i>
                <a className="logo"><span>Nabil</span>Cars</a>
                <nav className="navbar">
                    <a>home</a>
                   <Link to='/vehicules'> <a>vehicules</a></Link>
                   <Link to='/services'> <a>services</a></Link>
                   <Link to='/car-rental'> <a>Rental</a></Link>
                   <Link to="/reviews"><a>reviews</a></Link>
                 {userinformations ? <Link to="/contact"><a>contact</a></Link> : <></> }
                </nav>
                <div className="login-btn">
                  <Link to="/login"> <button className="btn" >login</button></Link>
                  {image  ? <img src={`http://localhost:8282/${image.filePath}`}  className="card-img-top" alt=""/>
                   : <AiOutlineUserAdd className='icon-user' />}
                   {user ?  <h1>{user.name}</h1> : <></>}

                </div>
            </header>
            <section className="home">
               <h1 className="home-parallax">find your car</h1>
               <img className="home-parallax" src={logo} alt="" />
              <Link to="/register"><a className="btn home-parallax">Get Started</a></Link>
            </section>
            <section className="icons-container">
               {data.map((item) => {
                   const {id , icon, following, title} = item;
                   return(
                       <div className="icons" key={id}>
                           <i className={icon}></i>
                           <div className="content">
                               <h3>{following}</h3>
                               <p>{title}</p>
                           </div>
                       </div>
                   );
               })}
            </section>
            <Footer />
        </div>
    )
}

export default Home;
