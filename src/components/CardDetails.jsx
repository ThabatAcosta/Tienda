import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider';

const CardDetails = ({products}) => {

  const {addToCart} = useContext(CartContext);


    return (
        <div>
      <div className="max-w-xs w-full h-full bg-white shadow-lg rounded-xl p-3" style={{ minHeight : '4rem'}}>
        <div className="flex flex-col h-full ">
         
            <div className=" w-full mb-3  h-4/6 " >
               <img src={products.thumbnail} alt="Just a flower" className=" w-full h-full object-cover rounded-2xl"/>
            </div>
            <div className=" h-2/6 flex-auto justify-evenly">
            <div className=" h-full">
              <div className="flex flex-wrap h-3/5 ">
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-black whitespace-nowrap mr-3"> Sold {products.sold_quantity}</span>
                </div>  
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto  text-black hover:text-purple-500  ">{products.title}</h2>
                  <div className="flex items-center font-medium bg-yellow-300  text-black text-xs px-2 py-1 ml-3 rounded-lg">
                    {products.condition}</div>
                </div>
              </div>
              <div className="text-xl text-black font-semibold mt-1  h-1/5"> $ {products.price}</div>
              
              
              <div className="flex space-x-2 text-sm font-medium justify-end   h-1/5">
                <button onClick={() => addToCart(products)} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-red-700 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-red-900 ">
                  <span>Add Cart</span>
                </button>
                
              </div>
            </div>
            </div>
        </div>
      </div>
  







        </div>
    )
}

export default CardDetails;
