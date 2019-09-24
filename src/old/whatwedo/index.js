import React from 'react';
import { Link } from '@reach/router';
import './style.css';

export default () => (
  <div>

    <div className='whatwedodiv'>
      <div className='whatwedotext'>
        <p>Hedy focuses on making successful digitalization journeys
      with forefront technology, high-skilled people and an innovative environment.
      We want sustainable, win-win-win-win business relations where the end-customer,
      the client/partner, Hedy and the world wins on the tech and business solutions
      we are developing.
        </p>
      </div>
      <div className='whatwedobox'>

        <h1 className='arcamajora2'> OUR THREE AREAS </h1>

      </div>
      <div className='threeareas'>

        <div className='picturedivwhatwedo'>
          <div id='services'>
            <div className='onearea'>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/services'
              >
                <div className='opacity05'>
                  <p className='hedytexttilt'>Hedy</p>
                  <h3 className='beige'>SERVICES</h3>
                  <h6 className='threeareassmalltext2'>
                  We support start-ups, mid- sized and larger
                  companies in their ambition to build a profitable
                  and successful business.
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='picturedivwhatwedo'>
          <div id='academy'>
            <div className='onearea'>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/academy'
              >
                <div className='opacity05'>
                  <p className='hedytexttilt'>Hedy</p>
                  <h3 className='beige'>ACADEMY</h3>
                  <h6 className='threeareassmalltext3'>
                  We provide high quality education to
                  close the gap between tech and business,
                  and build the skills we need to face a
                  future where technology will be the main actor.
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='picturedivwhatwedo'>
          <div id='innovation'>
            <div className='onearea'>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to='/innovationstudio'
              >
                <div className='opacity05'>
                  <p className='hedytexttilt'>Hedy</p>
                  <h3 className='beige'>INNOVATION STUDIO</h3>
                  <h6 className='threeareassmalltext'>
                  We edge up our business model by investing
                  in tech innovations that make a difference
                  and have the ambition to solve at least one
                  of the 17 sustainability goals set by the world’s
                  leaders for 2030.
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
