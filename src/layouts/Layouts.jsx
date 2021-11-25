import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layouts = ({children}) => {
    return (
        <div>
            <Header/>
         <div className=''> {children} </div> 
         <Footer/>
        </div>
    )
}

export default Layouts
