import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div>
            <section className="footer">
               <div className="box-container">
                 <div className="box">
                    <h3>our branchers</h3>
                    <a><i class="fas fa-map-marker-alt"></i>oujda</a>
                    <a><i class="fas fa-map-marker-alt"></i>hoceima</a>
                    <a><i class="fas fa-map-marker-alt"></i>nador</a>
                    <a><i class="fas fa-map-marker-alt"></i>rabat</a>
                    <a><i class="fas fa-map-marker-alt"></i>fes</a>
                 </div>
                 <div className="box">
                    <h3>quick links</h3>
                    <a href='/'><i class="fas fa-arrow-right"></i>home</a>
                    <a><i class="fas fa-arrow-right"></i>vehicles</a>
                    <a><i class="fas fa-arrow-right"></i>services</a>
                    <a href='/car-rental'><i class="fas fa-arrow-right"></i>rental</a>
                    <a><i class="fas fa-arrow-right"></i>reviews</a>
                    <a href='/contact'><i class="fas fa-arrow-right"></i>contact</a>
                 </div>
                 <div className="box">
                    <h3>quick links</h3>
                    <a><i class="fas fa-phone"></i>+212643778901</a>
                    <a><i class="fas fa-phone"></i>+212544231670</a>
                    <a><i class="fas fa-envelope"></i>Nabil.mou123@gmail.com</a>
                    <a><i class="fas fa-map-marker-alt"></i>nador, Rue jaich el malaki</a>
                  
                 </div>
                 <div className="box">
                    <h3>quick links</h3>
                    <a><i class="fab fa-facebook"></i>facebook</a>
                    <a><i class="fab fa-twitter-square"></i>twitter</a>
                    <a><i class="fab fa-instagram-square"></i>instagram</a>
                    <a><i class="fab fa-linkedin"></i>linkedin</a>
                  
                 </div>
                 

               </div>
               <div className='credit'>
                 create by mr. Nabil Mouami | all rights reserved!

               </div>

            </section>
        </div>
    )
}

export default Footer;
