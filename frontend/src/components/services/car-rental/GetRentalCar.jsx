import React from 'react'
import './GetRentalCar.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import data from './datacar';
import { useDispatch } from "react-redux";
import { load } from "../../../redux/carSlice";
import { Link} from 'react-router-dom';
import Footer from '../../footer/Footer';

function GetRentalCar() {
  const dispatch = useDispatch();
  const handleLoad = (current) => {
    dispatch(load(current));
}


    let date = new Date();
// add a day
    date.setDate(date.getDate() + 1);
    return (
        <div className='rental-container'>
            <h1 className='heading'>Rent from local owners</h1>
            <div className='mainform'>
              <div className='mainform-input'>
                <label>Location</label><br/>
                <input type='text' placeholder='Where?' />
              </div> 
              <div className='mainform-input'>
                <label>Pick up date</label><br/>
                <DatePicker selected={ new Date()}/>
              </div>
              <div className='mainform-input'>
                <label>Return date</label><br/>
                <DatePicker selected={date} />
              </div>
              </div>
              <h1 className='heading'>New cars</h1>
            <div className='box-car-container'>
                
              {data.map((car) => {
               return(
                  <div>

                      <Link to={`/car-rental/${car.id}`}>  
                      <div className='box-car' key={car.id}  >
                        <img src={car.image} alt={car.name}   onClick={() => handleLoad(car)}/>
                        <h3>{car.name}</h3>
                        <span>US$ {car.prix} per day</span>
                      </div></Link>
                  </div>
                     );
                   })}
              </div>
            <Footer />
        </div>
    )
}

export default GetRentalCar
