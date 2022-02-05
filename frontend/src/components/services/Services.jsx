import React from 'react'
import "./Services.css"
function Services() {
    return (
        <div>
            <section className="services">
              <h1 className="heading">our <span>services</span></h1>
              <div className="box-container">
                 <div className="box">
                   <i class="fas fa-car"></i>
                   <h3>car selling</h3>
                   <p> The href attribute is required for an anchor to be keyboard accessible.
                    Provide a valid, navigable address as the href value. If you cannot </p>
                    <a className="btn">read more</a>

                 </div>
                 <div className="box">
                   <i class="fas fa-tools"></i>
                   <h3>parts repair</h3>
                   <p> The href attribute is required for an anchor to be keyboard accessible.
                    Provide a valid, navigable address as the href value. If you cannot </p>
                    <a className="btn">read more</a>

                 </div>
                 <div className="box">
                   <i class="fas fa-car-crash"></i>
                   <h3>car insurance</h3>
                   <p> The href attribute is required for an anchor to be keyboard accessible.
                    Provide a valid, navigable address as the href value. If you cannot </p>
                    <a className="btn">read more</a>

                 </div>
                 <div className="box">
                   <i class="fas fa-car-battery"></i>
                   <h3>battery replacement</h3>
                   <p> The href attribute is required for an anchor to be keyboard accessible.
                    Provide a valid, navigable address as the href value. If you cannot </p>
                    <a className="btn">read more</a>

                 </div>
                 <div className="box">
                   <i class="fas fa-gas-pump"></i>
                   <h3>oil change</h3>
                   <p> The href attribute is required for an anchor to be keyboard accessible.
                    Provide a valid, navigable address as the href value. If you cannot </p>
                    <a className="btn">read more</a>

                 </div>
                 <div className="box">
                   <i class="fas fa-headset"></i>
                   <h3>24/7 support</h3>
                   <p> The href attribute is required for an anchor to be keyboard accessible.
                    Provide a valid, navigable address as the href value. If you cannot </p>
                    <a className="btn">read more</a>

                 </div>
              </div>

            </section>
        </div>
    )
}

export default Services;
