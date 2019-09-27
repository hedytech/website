import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet';

export default () => (
  <div className='fadeinclass'>
    <Helmet>
      <title>About - Hedylity Technology</title>
      <link rel="canonical" href="https://hedy.tech/about/" />
    </Helmet>
    <div className='headerpic2'>

      <div className='mobile'>
        <div className='pagemarginweb'>

          <div className='headertextbox' id='flexboxcenter'>
            <h1 className='arcamajora'>ABOUT HEDY</h1>
            <div className='headertextsmall2'>
              <p>We are Honest. We are Effectual. We are Devoted. We are Young &amp; Witty. We are HEDY.</p>
            </div>
          </div>

          <div className='justifycenter'>
            <div className='aboutteambox'>
              <div className='aboutpicturebox' id='hannaemelie' />

              <div className='abouttextthin2 colorwhite'>
                <p>We founded Hedy because our strong belief is that technology will be the enabler
        to create the world we want to live in. Hedy gathers high-skilled talents within
        an environment where each one gets to discover and utilize its full potential.
        With continuous learning as a core, Hedy answers up to the pace and dramatic changes
        of the tech world and is the actor that puts the agenda into action.
                </p><p> Let’s create the future together!</p>
              </div>

              <div className='aboutsignature colorwhite'>
                <h1>Hanna &amp; Emelie</h1>
              </div>

            </div>
          </div>

          <div className='textbox1about' id='backgroundcoloropacitywhite'>
            <h3 className='textboxheader'>LEADERSHIP PHILOSOPHY</h3>
            <p>We believe that everyone is a leader.
        Leadership and personal development
        goes hand-in-hand and is the key to creating
        openness, profitability and creativity.
            </p>
          </div>
        </div>

      </div>

      <div className='web'>
        <div>

          <div className='areasheader'>

            <div className='headertextbox'>
              <h1 className='arcamajora'>ABOUT HEDY</h1>
              <div className='headertextsmall2'>
                <h6 className='arcamajoranospace'>We are Honest. We are Effectual.
                We are Devoted. We are Young &amp; Witty. We are <mark className='pink'>HEDY.</mark>
                </h6>
              </div>
            </div>
          </div>

          <div className='justifycenter'>

            <div className='aboutteambox'>
              <div className='aboutpicturebox' id='hannaemelieweb' />

              <div className='abouttextthin2 colorwhite'>
                <p>We founded Hedy because our strong belief is that technology will be the enabler
        to create the world we want to live in. Hedy gathers high-skilled talents within
        an environment where each one gets to discover and utilize its full potential.
        With continuous learning as a core, Hedy answers up to the pace and dramatic changes
        of the tech world and is the actor that puts the agenda into action.
                </p><p> Let’s create the future together!</p>
              </div>
              <div className='aboutsignature colorwhite'>
                <h1>Hanna &amp; Emelie</h1>
              </div>

            </div>
          </div>

          <div className='textbox1about' id='backgroundcoloropacitywhite'>
            <h1 className='textboxheader'>LEADERSHIP PHILOSOPHY</h1>
            <p>We believe that everyone is a leader.
            Leadership and personal development
            goes hand-in-hand and is the key to creating
            openness, profitability and creativity.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);
