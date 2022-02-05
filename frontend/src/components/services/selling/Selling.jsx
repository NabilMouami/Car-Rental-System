import React from 'react'
import "./Selling.css";
import seller from "./seller-central.jpg";
import logo1 from "./how-work-1.png"
import logo2 from "./how-work-2.png"
import logo3 from "./how-work-3.png"
import logo4 from "./how-work-4.png"
function Selling() {
    return (
        <div className='selling'>
           <img className='seller' src={seller} />
           <h1 className='heading'>How Does It Work For Seller?</h1>
           <section className='services'>
             <div className="box-container">
               <div className="box">
                  <img src={logo1} />
                  <p>List your Vehicle Inventory At Droom</p>
                </div>
            </div>
            <div className="box-container">
               <div className="box">
                  <img src={logo2} />
                  <p>Buyers See your Products online at
                   droom & commit for purchase with 3%
                    Token amount</p>
                </div>
            </div>
            <div className="box-container">
               <div className="box">
                  <img src={logo3} />
                  <p>Buyers meets seller. Pays remaining 97% to seller</p>
                </div>
            </div>
            <div className="box-container">
               <div className="box">
                  <img src={logo4} />
                  <p>Seller closes the transaction by handing over Vehicle, keys and documents</p>
                </div>
            </div>
           </section>
            
        </div>
    )
}

export default Selling;
