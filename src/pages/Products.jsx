import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardDetails from '../components/CardDetails';

const Products = () => {

     const params = useParams();


    //state
    const [products, setProducts] = useState(null)
   
   
    const getProducts = async (query) => {
        const API_CATEGORY = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        const responseCategory = await fetch(API_CATEGORY);
        const resultCategory = await responseCategory.json();
      console.log(`resultCategory`, resultCategory)
       


        try {
            setProducts(resultCategory.results)
            
        } catch (error) {
            console.log(Error)
        }
    
        return resultCategory;
    
    }

    useEffect(() => {
       getProducts(params.category)
       
    }, [])

    // console.log(products)


    return (
        <div className=''>

<div   className=' h-97 bg-no-repeat bg-cover ' style={{ 
backgroundImage: `url("https://www.etiquetteschoolofamerica.com/wp-content/uploads/2019/11/5-Manners-to-Make-Christmas-Shopping-Merry-and-Bright-scaled.jpeg")` 
}}>
                
                </div>

<div className=" w-full px-4 sm:px-6 lg:px-4  py-8   bg-gray-300  flex flex-col justify-center items-center    ">
 
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8"   id='products'>

             {
                 products?.length > 0 &&
                 products?.map( pro => 
                  (  <CardDetails
                  key={pro.id}
               products={pro}/> 
          )
                    )
             }
           </div>
            </div>    

        </div>
    )
}

export default Products


