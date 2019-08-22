import React from 'react';
import './style.css';
import Getintouch from '../../components/getintouch';
import Bob from '../../components/bob';
import Emelie from '../../components/emelie';
import Hanna from '../../components/hanna';
import Oden from '../../components/oden';
import Sarah from '../../components/sarah';

class TeamPage extends React.Component {
  state = {
    isHiddenFirst: true,
    isHiddenSecond: true,
    isHiddenThird: true,
    isHiddenFourth: true,
    isHiddenFifth: true,
    isHiddenSixth: true
  };

  handleFirst = () => {
    this.setState({ isHiddenFirst: !this.state.isHiddenFirst });
  }

  handleSecond = () => {
    this.setState({ isHiddenSecond: !this.state.isHiddenSecond });
  }

  handleThird = () => {
    this.setState({ isHiddenThird: !this.state.isHiddenThird });
  }

  handleFourth = () => {
    this.setState({ isHiddenFourth: !this.state.isHiddenFourth });
  }

  handleFifth = () => {
    this.setState({ isHiddenFifth: !this.state.isHiddenFifth });
  }

  handleSixth = () => {
    this.setState({ isHiddenSixth: !this.state.isHiddenSixth });
  }

  render () {
    return (
      <div className='fadeinclass'>
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

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='bob' onClick={this.handleFirst}>
                    {this.state.isHiddenFirst && <h5 className='headernametext rcamajora'>BOB DAHLBERG</h5>}
                    {!this.state.isHiddenFirst && <Bob />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='emelie' onClick={this.handleSecond}>
                    {this.state.isHiddenSecond && <h5 className='headernametext arcamajora'>EMELIE MEURK DEMERUD</h5>}
                    {!this.state.isHiddenSecond && <Emelie />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='hanna' onClick={this.handleThird}>
                    {this.state.isHiddenThird && <h5 className='headernametext arcamajora'>HANNA MOISANDER</h5>}
                    {!this.state.isHiddenThird && <Hanna />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='oden' onClick={this.handleFifth}>
                    {this.state.isHiddenFifth && <h5 className='headernametext arcamajora'>ODEN LOBELL</h5>}
                    {!this.state.isHiddenFifth && <Oden />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='sara' onClick={this.handleSixth}>
                    {this.state.isHiddenSixth && <h5 className='headernametext arcamajora'>SARAH OUAKIM</h5>}
                    {!this.state.isHiddenSixth && <Sarah />}
                  </div>
                </div>

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

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='bob' onClick={this.handleFirst}>
                    {this.state.isHiddenFirst && <h5 className='headernametext arcamajora'>BOB DAHLBERG</h5>}
                    {!this.state.isHiddenFirst && <Bob />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='emelie' onClick={this.handleSecond}>
                    {this.state.isHiddenSecond && <h5 className='headernametext arcamajora'>EMELIE MEURK DEMERUD</h5>}
                    {!this.state.isHiddenSecond && <Emelie />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='hanna' onClick={this.handleThird}>
                    {this.state.isHiddenThird && <h5 className='headernametext arcamajora'>HANNA MOISANDER</h5>}
                    {!this.state.isHiddenThird && <Hanna />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='oden' onClick={this.handleFifth}>
                    {this.state.isHiddenFifth && <h5 className='headernametext arcamajora'>ODEN LOBELL</h5>}
                    {!this.state.isHiddenFifth && <Oden />}
                  </div>
                </div>

                <div className='teammemberdiv'>
                  <div className='pictureboxweb' id='sara' onClick={this.handleSixth}>
                    {this.state.isHiddenSixth && <h5 className='headernametext arcamajora'>SARAH OUAKIM</h5>}
                    {!this.state.isHiddenSixth && <Sarah />}
                  </div>
                </div>

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

export default TeamPage;
