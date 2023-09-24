import React, { Fragment } from 'react'
import FormCadastroProduto from '../components/FormCadastroProduto'
import AppNavbar from '../components/AppNavbar'

export default function CadastroProduto() {
   return (
      <Fragment>
         <AppNavbar/>
         <FormCadastroProduto/>
      </Fragment>
   )
}