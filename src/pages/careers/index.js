import React from 'react';
import Getintouch from '../../components/getintouch';
import { Helmet } from 'react-helmet';
import './index.css';

export default class Team extends React.Component {
  render () {
    return (
      <div className='fadeinclass'>
        <Helmet>
          <title>Careers - Hedylity Technology</title>
          <link rel="canonical" href="https://hedy.tech/careers/" />
        </Helmet>
        <div className='headerpic2'>

          <div className='mobile'>
            <div>

              <div className='areasheader'>
                <div className='headertextbox'>
                  <h1 className='arcamajora'>TEAM PHILOSOPHY</h1>
                  <div className='headertextsmall'>
                    <h5>At Hedy we put continuous learning in the
          forefront and share our knowledge to build
          a strong team and be able to take on complex
          challenges and create the future.
          We are gathering talents that are brilliant at what they do,
          role models within their area of expertise and who are
          driven by constantly learning.
                    </h5>
                  </div>
                </div>
              </div>

              <div className='teamboxweb'>

              </div>

            </div>
          </div>

          <div className='web'>
            <div>

              <div className='areasheader'>
                <div className='headertextbox'>
                  <h1 className='arcamajora'>TEAM PHILOSOPHY</h1>
                  <div className='headertextsmall'>
                    <h5>At Hedy we put continuous learning in the
              forefront and share our knowledge to build
              a strong team and be able to take on complex
              challenges and create the future.
              We are gathering talents that are brilliant at what they do,
              role models within their area of expertise and who are
              driven by constantly learning.
                    </h5>
                  </div>
                </div>
              </div>

              <div className='teamboxweb2'>

              </div>

            </div>
          </div>

          <div>
            <div id='flexboxcenter'>
              <h2 className='colorwhite'>WANT TO JOIN OUR TEAM?</h2>
            </div>
            <Getintouch />
          </div>
        </div>

      </div>
    );
  }
}
