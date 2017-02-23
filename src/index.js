import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/Main';
import Videos from './components/Videos';
import StudentPage from './components/StudentPage';


const app = document.getElementById('app');
// Render the main component into the dom
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}></Route>
      <Route path='videos/rachel_barrus' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/R.Barrus_FebruarySLC.mov'></Route>
      <Route path='videos/emmanuel_bonilla' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/E.Bonilla_FebruarySLC.mov'></Route>
      <Route path='videos/steve_escobar_hernandez' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/S.Escobar_Hernandez_February+SLC.mov'></Route>
      <Route path='videos/evangeline_harrod' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/E.Harrod_February+SLC.mov'></Route>
      <Route path='videos/henry_hess' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/H.Hess_February+SLC.mov'></Route>
      <Route path='videos/nailevid_lorenzo_lopez' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/N.Lorenzo_Lopez_SLC+February.mov'></Route>
      <Route path='videos/jailin_quinteros_gomez' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/J.Quinteros_FebruarySLC.mov'></Route>
      <Route path='videos/kimberly_santay' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/K.Santay_FebruarySLC.mov'></Route>
      <Route path='videos/jakobi_white' component={Videos} url='https://s3.amazonaws.com/studenttoolbox/J.White_February+SLC.mov'></Route>
    </Router>,
    app);
