
require('normalize.css/normalize.css');
require('styles/App.css');

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import React from 'react';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='videoBackground'>
        <ul>
          <li className='studentList'><Link to='videos/rachel_barrus'>Rachel Barrus</Link></li>
          <li className='studentList'><Link to='videos/emmanuel_bonilla'>Emmanuel Bonilla</Link></li>
          <li className='studentList'><Link to='videos/steve_escobar_hernandez'>Steve Escobar Hernandez</Link></li>
          <li className='studentList'><Link to='videos/evangeline_harrod'>Evangeline Harrod</Link></li>
          <li className='studentList'><Link to='videos/henry_hess'>Henry Hess</Link></li>
          <li className='studentList'><Link to='videos/nailevid_lorenzo_lopez'>Nailevid Lorenzo-Lopez</Link></li>
          <li className='studentList'><Link to='videos/jailin_quinteros_gomez'>Jailin Quinteros-Gomez</Link></li>
          <li className='studentList'><Link to='videos/kimberly_santay'>Kimberly Santay</Link></li>
          <li className='studentList'><Link to='videos/jakobi_white'>Jakobi White</Link></li>
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
