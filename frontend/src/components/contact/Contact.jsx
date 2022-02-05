import React,{useState,useEffect} from 'react'
import './Contact.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { AiOutlineUserAdd } from "react-icons/ai";


function Contact() {
  const userinfor = useSelector(state => state.userinfo)
  const {userinformations} = userinfor;
  const {image} = userinfor;




    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [message,setMessage] = useState('');
    const [contactes,setContactes] = useState([]);
    const [users,setUsers] = useState([]);
    console.log(users)


  {/*  const [singleFiles, setSingleFiles] = useState([{
        fileName
:
"how-work-4.png",
filePath
:
"uploads/2021-12-20T14-52-01.664Z-how-work-4.png",
fileType
:
"image/png",
fileSize
:
"8.17 KB"
    }]);*/}
   // console.log(users)
    const onSubmit1 = (e) => {
        e.preventDefault();
        const contact = {
          Name: name,
          Email: email,
          Number: number,
          Message: message
        };
        axios.post('http://localhost:8282/contacts/add', contact).then(res => console.log(res.data));
     } 
          

      
    useEffect(() =>{
        axios.get('http://localhost:8282/contacts').then(response => {
            setContactes(response.data);
        });
     },[]);
 
    useEffect(() => {
      axios.get('http://localhost:8282/login').then(response => {
        setUsers(response.data);
    });
    }, [])
    return (
        <div>
            <section className="contact">
              <h1 className="heading"><span>contact</span> us</h1>
              <div className="row">
              <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21941.895442567526!2d-2.9460590971442433!3d35.16454394652432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a7f62be6e41b%3A0x6f1a80a88febeae!2sNador!5e0!3m2!1sfr!2sma!4v1638890861211!5m2!1sfr!2sma"  allowfullscreen="" loading="lazy">

              </iframe>
                 <form onSubmit={onSubmit1}>
                     <h3>get in touch</h3>
                     <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" className="box" />
                     <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="box" />
                     <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder="number" className="box" />
                     <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" className="box" cols="30" rows="10"></textarea>
                     <input className="btn" type="submit" value="send message" />
                 </form>
              </div>

            </section>
               {contactes.length > 0 && (contactes.map((cnt) => {
                 return(
                    <div className='comment'>
                       {image  ? <img src={`http://localhost:8282/${image.filePath}`}  className="card-img-top" alt="img"/>
                       : <AiOutlineUserAdd className='icon-user' />}


                     <div className='comment-msg'>
                       <h4>{cnt.Email}</h4>
                       <p>{cnt.Message}</p>
                     </div>
                    </div>
                 );
               }))}


        </div>
    )
}

export default Contact
