import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Master(props) {
  return (
    <>
        <Header />

        {props.children}
      

        <Footer />  
    </>
  )
}
