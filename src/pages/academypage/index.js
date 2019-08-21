import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Contactbutton from '../../components/contactbutton';
import ScrollToTopOnMount from '../../components/scrolltotoponmount';
import Tellmemorebutton from '../../components/tellmemorebutton';
import Comingsoon from '../../components/comingsoon';

class AcademyPage extends React.Component {
  render () {
    return (
      <div className='fadeinclass'>
        <ScrollToTopOnMount />

        <div className='mobile'>
          <div id='academy3'>

            <div className='areasheader'>
              <div className='headertextbox'>
                <p className='hedytexttiltacademy'>Hedy</p>

                <h1 id='arcamajora'>ACADEMY</h1>
                <div className='headertextsmall2'>
                  <h4>We close the gap between tech and business</h4>
                </div>

              </div>
            </div>

            <div className='academyteambox' id='backgroundcolordarkbluewhite'>
              <div className='academytextthin'>
                <h4>With focus on modern leadership and technology,
            Hedy builds and increases the competencies of people and
            organizations to answer up to the requirements of the future.
                </h4>
                <h4>We provide crash courses, intensive education
            programs and seminars online as well as classroom based
                </h4>
              </div>
            </div>

            <div className='teamboxweb'>

              <h1 id='colorwhite'>CURRENT COURSES</h1>

              <div className='picturedivcourse' id='growdiv'>
                <div id='kotlin2'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Succeed with Kotlin</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to='/kotlin'
                  >
                    <div>
                      <Tellmemorebutton />
                    </div>
                  </Link>
                </div>
              </div>

              <div className='picturedivcourse'>
                <div id='academy'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Android development for beginners</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <div>
                    <Comingsoon />
                  </div>
                </div>
              </div>

              <div className='picturedivcourse'>
                <div id='academy'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Advanced Android development</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <div>
                    <Comingsoon />
                  </div>
                </div>
              </div>

              <div className='picturedivcourse'>
                <div id='academy'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Android Architecture</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <div>
                    <Comingsoon />
                  </div>
                </div>
              </div>

              <div className='picturedivcourse'>
                <div id='academy'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Growth hacking</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <div>
                    <Comingsoon />
                  </div>
                </div>
              </div>

              <div className='picturedivcourse'>
                <div id='academy'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Take digitalization and tech trends into the board room</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <div>
                    <Comingsoon />
                  </div>
                </div>
              </div>

              <div className='picturedivcourse'>
                <div id='academy'>
                  <div className='coursesdiv'>
                    <div className='margin'>
                      <h2 id='arcamajoranospace'>Learn to code</h2>
                    </div>
                    <div className='bottomdiv' id='hedyacademytext' />
                  </div>
                  <div>
                    <Comingsoon />
                  </div>
                </div>
              </div>
            </div>

            <div className='academyteambox' id='backgroundcolordarkbluewhite'>

              <div className='academytextthin2' id='colorwhite'>
                <h4 className='textboxheader'>TYPE OF COURSES</h4>
                <div className='bulletpoints'>
                  <ul id='nopaddingleft'>
                    <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
                    <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
                    <li>Specific courses that will take your business and your competence to the next level</li>
                    <li>Dedicated programs for continuous learning and/or targeted actions</li>
                  </ul>
                </div>
              </div>

              <div className='academytextthin2' id='paddingbottom'>
                <h4 className='textboxheader'>TARGET GROUP</h4>
                <div>
                  <h4 id='nomargin'> Driven fast learners, developers, board members, management team members,
           people with a passion for tech who want to change industry, entrepreneurs, among others...
                  </h4>
                </div>
              </div>
            </div>

          </div>
          <Contactbutton />

        </div>

        <div className='web'>
          <div>

            <div id='academy3'>
              <div id='opacitydark'>

                <div className='areasheader'>
                  <div className='pagemarginweb'>

                    <div className='headertextbox'>
                      <p className='hedytexttiltacademy'>Hedy</p>

                      <h1 id='arcamajora'>ACADEMY</h1>
                      <div className='headertextsmall2'>
                        <p>We close the gap between tech and business</p>
                      </div>
                    </div>
                  </div>

                  <div className='justifycenter'>

                    <div className='academyteambox' id='backgroundcolordarkbluepink'>
                      <div className='academytextthin' id='colorwhite'>
                        <h5 id='paddingleftright'>With focus on modern leadership and technology,
          Hedy builds and increases the competencies of people and
          organizations to answer up to the requirements of the future.
          We provide crash courses, intensive education
          programs and seminars online as well as classroom based.
                        </h5>
                      </div>
                      <div id='colorpink'>
                        <h1 id='nomargin'>CURRENT COURSES</h1>
                      </div>
                    </div>

                    <div className='teamboxweb'>

                      <div className='picturedivcourse' id='growdiv'>
                        <div id='kotlin2'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Succeed with Kotlin</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <Link
                            style={{ textDecoration: 'none', color: 'black' }}
                            to='/kotlin'
                          >
                            <div>
                              <Tellmemorebutton />
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className='picturedivcourse'>
                        <div id='academy'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Android development for beginners</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <div>
                            <Comingsoon />
                          </div>
                        </div>
                      </div>

                      <div className='picturedivcourse'>
                        <div id='academy'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Advanced Android development</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <div>
                            <Comingsoon />
                          </div>
                        </div>
                      </div>

                      <div className='picturedivcourse'>
                        <div id='academy'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Android Architecture</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <div>
                            <Comingsoon />
                          </div>
                        </div>
                      </div>

                      <div className='picturedivcourse'>
                        <div id='academy'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Growth hacking</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <div>
                            <Comingsoon />
                          </div>
                        </div>
                      </div>

                      <div className='picturedivcourse'>
                        <div id='academy'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Take digitalization and tech trends into the board room</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <div>
                            <Comingsoon />
                          </div>
                        </div>
                      </div>

                      <div className='picturedivcourse'>
                        <div id='academy'>
                          <div className='coursesdiv'>
                            <div className='margin'>
                              <p>Learn to code</p>
                            </div>
                            <div className='bottomdiv' id='hedyacademytext' />
                          </div>
                          <div>
                            <Comingsoon />
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className='academyteambox' id='backgroundcolordarkbluewhite'>

                      <div className='academytextthin2' id='paddingbottom'>
                        <h6 className='textboxheader' id='nomargin'>TYPE OF COURSES</h6>
                        <h6 className='bulletpoints' id='nomargintop'>
                          <ul>
                            <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
                            <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
                            <li>Specific courses that will take your business and your competence to the next level</li>
                            <li>Dedicated programs for continuous learning and/or targeted actions</li>
                          </ul>
                        </h6>
                      </div>

                      <div className='academytextthin2' id='paddingbottom'>
                        <h6 className='textboxheader' id='nomargintoplittlebottom'>TARGET GROUP</h6>
                        <div>
                          <h6 id='nomargin'> Driven fast learners, developers, board members, management team members,
                     people with a passion for tech who want to change industry, entrepreneurs, among others...
                          </h6>
                        </div>
                      </div>

                    </div>
                  </div>

                  <Contactbutton />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default AcademyPage;
