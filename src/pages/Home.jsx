import React, { useState, useEffect} from 'react';



//Components
import Carusel from '../components/Carusel';
import Louder from '../components/Louder';
import CardProducts from '../components/CardProducts';
import Error404 from './Error404';





const Home = () => {

 
     //State 
     const [shop, setShop] = useState([]);
     const [category, setCategory] = useState([]);
     const [loader, setLoader] = useState(false);
     const [error404, setError404] = useState(false)
    
    
 
     //Funciones
     const handleShop = ({value}) => {  
       setShop(value);
     };

    

     const getHandleShop = async () => {
         setLoader(true);

        
         try { 
             
            const API = `https://fakestoreapi.com/products/categories`;
            const response = await fetch(API);
            const result = await response.json();
            console.log(`result`, result)

          //  await setTimeout(() => {
          //   console.log(`result`, result)
          //   }, 3600);

            if(result){
              setCategory(result)
              setLoader(false);
               return
             

            }
              setLoader(false);

         }
             
          catch (error) {
            setLoader(false);
            console.error(error)
            setError404(true)
          
         }
         setLoader(false);
        }
        console.log(`category`, category) 

        useEffect(() => {
            getHandleShop(); 
          
        }, [])


   
        return (
            <>
          <div className=' bg-gray-100  flex flex-col justify-center items-center '>
              <Carusel/>
             

           {
               loader && <Louder/>
           }  

<div className='  w-full my-8 h-20 '/>


<div className="max-w-7xl px-4 sm:px-6 lg:px-4  py-8   ">
 
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8"   id='products'>
          {
            category.map(shop => (
              <CardProducts
              key={shop.category}
              category={shop}/>
            ) )
          }
        </div>
</div>

{
  error404 && <Error404/>
}




          </div>
          </>
            
        );

}

export default Home;