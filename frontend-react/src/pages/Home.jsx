import React, { Fragment } from 'react';
import AppNavbar from '../components/AppNavbar';
import ConsultaCatalogo from '../components/ConsultaCatalogo';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <Fragment>
         <AppNavbar/>
         <Link to="/produtos/catalogo">Ir para a tela de catalogo</Link>
         <ConsultaCatalogo/>
      </Fragment>
   );
}

export default Home;
