import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Hamburgermenu extends React.Component {
  state = {
    menuOpen: false
  };

  render () {
    return (
      <div>
        <div className='mobile'>
          <div className='pagemargin'>
            <div className='menuboarddiv'>
              <Link
                style={{ textDecoration: 'none', color: '#ffffff' }}
                to='/'
              >
                <div className='logohamburgermenu' id='blackhylogo' />
              </Link>

              <label for='closeIconMobile' style={{ visibility: 'hidden' }}>Close</label>

              <div className='boxbehindhamburger' id='menuToggle'>
                <nav role='navigation'>
                  <div id='menuToggle'>
                    <input id='closeIconMobile' name='closeIconMobile' type='checkbox' onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} />
                    <span />
                    <span />
                    <span />
                    <ul id='menu' onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
                      <li>
                        <Link
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          to='/'
                        >
                          <p>HOME</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          to='/services'
                        >
                          <p>SERVICES</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          to='/academy'
                        >
                          <p>ACADEMY</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          to='/innovationstudio'
                        >
                          <p>INNOVATION STUDIO</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          to='/team'
                        >
                          <p>TEAM</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          to='/about'
                        >
                          <p>ABOUT</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* {!this.state.isHidden && <Menudropdown />} */}
              </div>
            </div>
          </div>
        </div>

        <div className='web'>
          <div className='webmenuboarddiv'>
            <div className='webhedylogotextbox'>
              <Link
                style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                to='/'
                title='Hedy'
              >
                <div id='blackhylogo' />
              </Link>

            </div>
            <div className='menutext'>
              <h5 id='arcamajora'>MENU</h5>
            </div>
            <div className='webboxbehindhamburger' id='webmenuToggle'>

              <nav role='navigation'>

                <div id='webmenuToggle'>

                  <input id='closeIcon' type='checkbox' />

                  <ul id='webmenu'>
                    <li>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/'
                      >
                        <p>HOME</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/services'
                      >
                        <p>SERVICES</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/academy'
                      >
                        <p>ACADEMY</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/innovationstudio'
                      >
                        <p>INNOVATION STUDIO</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/team'
                      >
                        <p>TEAM</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/about'
                      >
                        <p>ABOUT</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* {!this.state.isHidden && <Menudropdown />} */}
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default Hamburgermenu;
