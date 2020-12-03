import React from 'react'
import FastBody from './fastBody'
import Footer from './footer'
import Navbar from './navBar'
import SecondBody from './secondBody'


function Home() {
    return (
        <div>
            <Navbar/>
            <FastBody/>
            <SecondBody/>
            <Footer/>
            
        </div>
    )
}

export default Home
