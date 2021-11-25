import { Dialog } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContextProvider'
import CardTrolley from './CardTrolley'

const TrolleyShop = ({openModalCart, handleCloseModalCart}) => {

    
    const {cartState} = useContext(CartContext)
    const [totalCart, setTotalCart] = useState(0)
   

    const newCartProduct = () => {
  let personasMap = cartState.map(item=>{
      return [item.id, item]
  });
  var personasMapArr = new Map(personasMap); // Pares de clave y valor
  
  let unicos = [...personasMapArr.values()]; // Conversión a un array

        return unicos
      
    }

    const newCart = newCartProduct()

    return (

        <Dialog
        open={openModalCart}
        onClose={handleCloseModalCart}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >

      

            <div className=" h-screen bg-gray-100 w-full">
             <div className="  lg:col-span-2 col-span-3 bg-gray-100 space-y-8 px-12">
                <div className=" mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center shadow rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                   
      
        <div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Shopping Cart</h1>



            <ul className="py-6 border-b space-y-6 px-8">
           
            {
            newCart.map(troley => (
                <CardTrolley
                key={troley.id}
                cartState={troley} 
                totalCart={totalCart}
                setTotalCart={setTotalCart}
                />
            ))
        } 

            </ul>

            <div className="px-8 border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-pink-500">$ {totalCart}</span>
                </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>$ {totalCart}</span>
            </div>
        </div>
    </div> 
    </div>
    </div>
    </div>
    </Dialog>
    )
}

export default TrolleyShop



{/* 
 */}
