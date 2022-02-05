import React from 'react';
import './Vehicules.css';
import box from './datavehicule'
function Vehicules() {
   console.log(box)
   
    return (
        <div>
            <section className="vehicles">
               <h1 className="heading">popular <span>vehicles</span></h1>
               <div className="vehicles-slider">
                    <div className="wrapper">
                         <div className="box"> 
                            <img src={box[0].image}  alt="hamiiiid"/>
                            <div className="content">
                               <h3>{box[0].price}</h3>
                               <div className="price">
                                    <span>price: </span> 100000DH
                               </div>
                               <p>
                                   new
                                   <span class="fas fa-circle"></span> 2021
                                   <span class="fas fa-circle"></span> automatic
                                   <span class="fas fa-circle"></span> petrol
                                   <span class="fas fa-circle"></span> 183mph
                               </p>
                               <a class="btn">check out</a>
                            </div>
                         </div>
                         <div className="box"> 
                            <img src={box[1].image} />
                            <div className="content">
                               <h3>new model</h3>
                               <div className="price">
                                    <span>price: </span> 110000DH
                               </div>
                               <p>
                                   new
                                   <span class="fas fa-circle"></span> 2021
                                   <span class="fas fa-circle"></span> automatic
                                   <span class="fas fa-circle"></span> petrol
                                   <span class="fas fa-circle"></span> 180mph
                               </p>
                               <a class="btn">check out</a>
                            </div>
                         </div>
                         <div className="box"> 
                            <img src={box[2].image} />
                            <div className="content">
                               <h3>new model</h3>
                               <div className="price">
                                    <span>price: </span> 250000DH
                               </div>
                               <p>
                                   new
                                   <span class="fas fa-circle"></span> 2021
                                   <span class="fas fa-circle"></span> automatic
                                   <span class="fas fa-circle"></span> petrol
                                   <span class="fas fa-circle"></span> 250mph
                               </p>
                               <a class="btn">check out</a>
                            </div>
                         </div>
                         <div className="box"> 
                            <img src={box[3].image} />
                            <div className="content">
                               <h3>new model</h3>
                               <div className="price">
                                    <span>price: </span> 2550000DH
                               </div>
                               <p>
                                   new
                                   <span class="fas fa-circle"></span> 2021
                                   <span class="fas fa-circle"></span> automatic
                                   <span class="fas fa-circle"></span> electric
                                   <span class="fas fa-circle"></span> 300mph
                               </p>
                               <a class="btn">check out</a>
                            </div>
                         </div>
                         <div className="box"> 
                            <img src={box[4].image} />
                            <div className="content">
                               <h3>new model</h3>
                               <div className="price">
                                    <span>price: </span> 500000DH
                               </div>
                               <p>
                                   new
                                   <span class="fas fa-circle"></span> 2021
                                   <span class="fas fa-circle"></span> automatic
                                   <span class="fas fa-circle"></span> petrol
                                   <span class="fas fa-circle"></span> 210mph
                               </p>
                               <a class="btn">check out</a>
                            </div>
                         </div>
                         <div className="box"> 
                            <img src={box[5].image} />
                            <div className="content">
                               <h3>new model</h3>
                               <div className="price">
                                    <span>price: </span> 180000DH
                               </div>
                               <p>
                                   new
                                   <span class="fas fa-circle"></span> 2021
                                   <span class="fas fa-circle"></span> automatic
                                   <span class="fas fa-circle"></span> petrol
                                   <span class="fas fa-circle"></span> 205mph
                               </p>
                               <a class="btn">check out</a>
                            </div>
                         </div>
                    </div>
               </div>
            </section>
        </div>
    )
}

export default Vehicules;
