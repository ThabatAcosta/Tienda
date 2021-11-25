import React, { useEffect, useState } from 'react'
import TrolleyShop from './TrolleyShop'

const Header = () => {

   
    const [changueBackground, setChangueBackground] = useState({ backgroundColor: 'transparent' });
    const [openModalCart, setOpenModalCart] = useState(false);

    const handleOpenModalCart = () => {
        setOpenModalCart(true);
      };
    
      const handleCloseModalCart = () => {
        setOpenModalCart(false);
      };
  
    const listenScrollEvent = (event) => {
      if (window.scrollY < 73) {
        return setChangueBackground({ backgroundColor: 'transparent' });
      } else if (window.scrollY > 70) {
        return setChangueBackground({
          backgroundColor: 'black',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          transition: 'all 0.7s ease-out',
        });
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
      return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    
    return (
        <div  className='w-full ' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
             <div className=' absolute flex items-center justify-between  w-full  h-20 lg:h-24 lg:px-8 '
                  style={changueBackground}>

            <div className="flex flex-wrap w-full">
               <nav className="flex justify-between w-full text-white xl:px-12 py-6 px-5">
                  <div className="w-full  flex space-x-12 items-center ">
                     <a className="text-4xl font-extrabold font-sans" href="" >
                        Shop NOW
                      </a> 
                      </div>
                      
               
               
                <button type="button" onClick={ () =>  handleOpenModalCart()} className="flex items-center text-white space-x-5  ">
                    <div className="flex items-center hover:text-gray-900" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="absolute flex ml-4 -mt-5">
                            <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-red-700 opacity-75"></span>
                            <span className="h-3 w-3 relative inline-flex rounded-full bg-red-600"></span>
                        </span>
                    </div>
                </button>
        </nav>
    </div> 
    </div> 


    <TrolleyShop
    openModalCart={openModalCart}
    handleCloseModalCart={() => handleCloseModalCart()} />

        </div>
    )
}

export default Header
