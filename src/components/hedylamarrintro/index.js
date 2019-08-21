import React from 'react';
import './style.css';

class Hedylamarrintro extends React.Component {
  render () {
    return (
      <div>
        <div className='hedydiv'>
          <div className='hedybox1'>
            <h1 className='arcamajora'> HEDY LAMARR</h1>
            <h2> Our muse & the woman behind the name</h2>

            <h5>Hedylity Technology is named after Hedy Lamarr,
      the brain behind frequency hopping.
      Her invention came from wanting to think of something to stop Hitler
      from taking over Europe during World War II.
            </h5>
            <h5>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
      cell phone, GPS and military technology –
      an invention that forms our whole society today!
            </h5>
            <h5>Hedy was a famous Hollywood actor and the inspiration behind the
      look of Snow-white and Catwoman, she never got any share of
      her 30 billion dollar invention.
            </h5>
            <h5>Just as Hedy, Hedylity Technology wants to
      make a tech imprint for a better world
            </h5>
          </div>

          <div className='hedybox'>
            <div id='hedylamarrpicture'>
              <div className='margintop'>
                <h4 id='nomargin'>“The brains of people are more
        interesting than the looks”
                </h4>
                <h6 id='nomargin'>Hedy Lamarr (1914 – 2000)</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Hedylamarrintro;
