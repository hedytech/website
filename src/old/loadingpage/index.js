import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../components/header';
import Introbox from '../../components/introbox';
import Whatwedo from '../../components/whatwedo';
import Teamintro from '../../components/teamintro';
import Wearehedytext from '../../components/wearehedytext';
import Hedylamarrintro from '../../components/hedylamarrintro';

class Loadingpage extends React.Component {
  render () {
    return (
      <div className='fadeinclass'>
        <div>

          <Header />
          <div>

            <Whatwedo />

            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to='/about'
            >
              <Wearehedytext />
            </Link>

            <Introbox />

            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to='/team'
            >
              <Teamintro />
            </Link>

            <Hedylamarrintro />

          </div>
        </div>

      </div>
    );
  }
}

export default Loadingpage;
