import React, { useEffect, useReducer, useState } from 'react'


const CardTrolley = ({cartState, setTotalCart, totalCart}) => {

const [price, setPrice] = useState(cartState.price)

    const initialState = {count: 1, total: totalCart};
    
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1, total: totalCart + price};
    case 'decrement':
      return {count: state.count - 1, total: totalCart - price};
    default:
      throw new Error();
  }
}
const [state, dispatch] = useReducer(reducer, initialState)

useEffect(() => {
    setPrice(state.count * cartState.price)
    setTotalCart(state.total)
}, [state])

useEffect(() => {
    setTotalCart(state.total)
}, [price])



    return (
       
       <li className="grid grid-cols-6 gap-2 border-b-1">
        <div className="col-span-1 self-center">
            <img src={cartState.thumbnail} alt="Product" className="rounded w-full"/>
        </div>
        <div className="flex flex-col col-span-3 pt-2">
            <span className="text-gray-600 text-md font-semi-bold">{cartState.title}</span>
            <span className="text-gray-400 text-sm inline-block pt-2"> {cartState.condition}</span>
        </div>
        <div className="col-span-2 pt-3">
            <div className="flex items-center space-x-2 text-sm justify-between">
       
            <button type='button' onClick={() => dispatch({type: 'decrement'})}>-</button>
                <span className="text-gray-400">{state.count}</span>
            <button type='button' onClick={() => dispatch({type: 'increment'})}>+</button>
                
                <span className="text-pink-400 font-semibold inline-block">$ {price}</span>
            </div>
        </div>
    </li>

    )
}

export default CardTrolley
