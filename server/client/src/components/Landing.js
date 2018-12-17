import React from 'react';
import logo from './images/truck.jpg'
const Landing = () => {
    return(
      <div style={{textAlign: 'center'}}>
          <div className="row">
              <div className="logo">
                  <img src={logo} width="895" height="600" />
              </div>
          </div>
      </div>
    );
}
export default Landing;