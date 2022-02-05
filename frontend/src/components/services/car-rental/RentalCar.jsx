import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from '../../../redux/carSlice';
import { AiFillHeart } from "react-icons/ai";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import StripeCheckout from 'react-stripe-checkout';


import './RentalCar.css'
import Questions from './question/Questions';
import Footer from '../../footer/Footer';
function RentalCar() {
       // add a day

      let date = new Date();
      date.setDate(date.getDate() + 1);

      const dispatch = useDispatch();
      const history = useHistory();
    


      const [product, setProduct] = useState({
        name: "React from FB",
        price: 10,
        productBy: "facebook"
      });
      const makePayment = token => {
        const body ={
          token,
          product
        }
        const headers ={
          "Content-Type": "application/json"
        }
        return fetch(`http://localhost:8282/payment`, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        }).then(response => {
          console.log("RESPONSE ", response)
          const {status} = response;
          console.log("STATUS ", status)
        }).catch(error => console.log(error))
      };
      const handleAddToCart = (auto) => {
        dispatch(addToCart(auto));
      };
    
  
    const cars  = useSelector((state) => state.car.currentItem);

    return (
        <div className='rental'>
            <Link to='/cart'><AiFillHeart className='close-login-form' onClick={handleAddToCart(cars)}/></Link>
            <img src={cars.image} alt={cars.name} />
               <h1>{cars.name}</h1>
            <div className='ikon'>
              <i class="fas fa-briefcase"></i><span>{cars.briefcase}</span>
              <i class="far fa-user"></i><span>{cars.user}</span>
            </div>
            <div className='fonts'>
              <div className='flex-font'>
                <div>
                  <i class="fas fa-car-alt"></i> <span>{cars.front}</span>
                </div>
                <div>
                <i class="fas fa-gas-pump"></i><span>{cars.pump}</span>
                </div>
              </div>
               <h1>Rental terms</h1>
               <div className='flex-font'>
                 <div>
                 <i class="fas fa-tachometer-alt"></i><span>Maximum mileage per day</span>
                 </div>
                 <div>
                   <span>{cars.speed}</span>
                 </div>
               </div>
               <div className='flex-font'>
                  <div>
                  <i class="fas fa-dollar-sign"></i><span>Additional distance fee</span>
                  </div>
                  <div>
                    <span>{cars.priceinhour}</span>
                  </div>
               </div>
               <div className='flex-font'>
                  <div>
                  <i class="far fa-clock"></i><span>Additional usage fee</span>
                  </div>
                  <div>
                    <span>US$ 0 per day</span>
                  </div>
               </div>
               <div className='flex-font'>
                  <div>
                  <i class="fas fa-child"></i><span>Minimum driver age</span>
                  </div>
                  <div>
                    <span>18 years old</span>
                  </div>
               </div>
               <div className='flex-font'>
                  <div>
                  <i class="fas fa-car"></i><span>Minimum required driving experience</span>
                  </div>
                  <div>
                    <span>1 year</span>
                  </div>
               </div>
               <div className='flex-font'>
                  <div>
                  <i class="fas fa-business-time"></i><span>Minimum rental period</span>
                  </div>
                  <div>
                    <span>1 day</span>
                  </div>
               </div>
               <h1>Features</h1>
               <div className='flex-font'>
                  <div>
                  <i class="fas fa-music"></i><span>{cars.feature1}</span>
                  </div>
                  <div>
                  <i class="fab fa-bluetooth-b"></i><span>{cars.feature2}</span>
                  </div>
                  <div>
                  <i class="fas fa-wind"></i><span>{cars.feature3}</span>
                  </div>
               </div>
               <div className='flex-font'>
                  <div>
                  <i class="fas fa-chair"></i><span>{cars.feature4}</span>
                  </div>
                  <div>
                  <i class="fas fa-tachometer-alt"></i><span>{cars.feature5}</span>
                  </div>
                  <div>
                  <i class="fas fa-thermometer-three-quarters"></i><span>{cars.feature6}</span>
                  </div>
               </div>
               <h1>Owner</h1><span>    {cars.owner}</span><br/>
               <h4>{cars.joined}</h4>
               <Questions />
              


               
            </div>
            <div className='checkout'>
              
              <h3>US$ 66<span>per day</span></h3>
              <div className='checkout-date-flex'>
                <div className='checkout-date'>
                  <label>Pick up date</label><br/>
                  <DatePicker selected={ new Date()}/>
                </div>
                <div className='checkout-date'>
                  <label>Return date</label><br/>
                  <DatePicker selected={date} />
                </div>
              </div>
              <div className='prix'>
                 <h2>US$ {cars.prix} х 1 days <span>US$ {cars.prix}</span></h2>
              </div>
              <div className='prix'>
                 <h2>Trip price <span>US$ {cars.prix}</span></h2>
              </div>
              <StripeCheckout stripeKey='pk_test_51K6YxnLDcLVLx47gxCr5r254tDfJ0UAVqaRNrzUUnsJpLeeFGJazbyQJNzB5tzMKrrdcdsbtRGirgiubdwOu8Oyu002u72d11G'
                token={makePayment}
                  name="Buy React"
                  amount={product.price * 100}
                > 
              <button class="btnn"><a>Book now</a></button>
              </StripeCheckout>
              <span className='or'>Or</span>
              <button class="btnn call-me"><a>Call me</a></button>
            </div>
          <Footer />
        </div>
    )
}

export default RentalCar;
