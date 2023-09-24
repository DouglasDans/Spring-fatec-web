import React, { Fragment } from 'react';
import AppNavbar from '../components/AppNavbar';
import ConsultaCatalogo from '../components/ConsultaCatalogo';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <Fragment>
         <AppNavbar/>
         <ConsultaCatalogo/>
      </Fragment>
   );
}

export default Home;
