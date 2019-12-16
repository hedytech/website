import React from 'react';
import { Link } from '@reach/router';
import './index.css';

export default class Hamburgermenu extends React.Component {
  state = {
    menuOpen: false
  };

  render () {
    const { menuOpen } = this.state;

    return (
      <div>
        <div className='mobile'>
          <div className='pagemargin'>
            <div className='menuboarddiv'>
              <Link
                style={{ textDecoration: 'none', color: '#ffffff' }}
                to='/'
              >
                <div className='logohamburgermenu blackhylogo' />
              </Link>

              <div className='boxbehindhamburger menuToggle'>
                <nav role='navigation'>
                  <div className='menuToggle'>
                    <input id='closeIconMobile' aria-label='Close' type='checkbox' readOnly checked={menuOpen} onClick={() => this.setState({ menuOpen: !menuOpen })} />
                    <span />
                    <span />
                    <span />
                    <ul className='menu' style={{ display: menuOpen ? '' : 'none' }} onClick={() => this.setState({ menuOpen: !menuOpen })}>
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
                          to='/careers'
                        >
                          <p>CAREERS</p>
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
                <div className='blackhylogo' />
              </Link>

            </div>
            <div className='menutext'>
              <h5 className='arcamajora'>MENU</h5>
            </div>
            <div className='webboxbehindhamburger webmenuToggle'>

              <nav role='navigation'>

                <div className='webmenuToggle'>

                  <input id='closeIcon' type='checkbox' aria-label='Close' readOnly defaultChecked={menuOpen} onClick={() => this.setState({ menuOpen: !menuOpen })} />

                  <ul className='webmenu' onClick={() => this.setState({ menuOpen: !menuOpen })}>
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
                        to='/careers'
                      >
                        <p>CAREERS</p>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
