import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Hamburgermenu extends React.Component {
  componentDidMount () {
    const menu = document.getElementById('menu');
    menu.addEventListener('click', this.handleMenuClickMobile);

    const webmenu = document.getElementById('webmenu');
    webmenu.addEventListener('click', this.handleMenuClick);
  }

  handleMenuClickMobile = () => {
    const closeIcon = document.getElementById('closeIconMobile');
    closeIcon.checked = false;
  }

  handleMenuClick = () => {
    const closeIcon = document.getElementById('closeIcon');
    closeIcon.checked = false;
  }

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

              <div className='boxbehindhamburger' id='menuToggle'>
                <nav role='navigation'>
                  <div id='menuToggle'>
                    <input id='closeIconMobile' type='checkbox' />
                    <span />
                    <span />
                    <span />
                    <ul id='menu'>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/'
                      >
                        <p>HOME</p>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/services'
                      >
                        <p>SERVICES</p>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/academy'
                      >
                        <p>ACADEMY</p>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/innovationstudio'
                      >
                        <p>INNOVATION STUDIO</p>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/team'
                      >
                        <p>TEAM</p>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none', color: '#ffffff' }}
                        to='/about'
                      >
                        <p>ABOUT</p>
                      </Link>
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
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to='/'
                    >
                      <p>HOME</p>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to='/services'
                    >
                      <p>SERVICES</p>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to='/academy'
                    >
                      <p>ACADEMY</p>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to='/innovationstudio'
                    >
                      <p>INNOVATION STUDIO</p>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to='/team'
                    >
                      <p>TEAM</p>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none', color: '#ffffff' }}
                      to='/about'
                    >
                      <p>ABOUT</p>
                    </Link>
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
