import React from 'react'
import { Link } from 'react-router-dom';


const CardProducts = ({category}) => {

    console.log(`category`, category)
    return (

        <Link to={{
                              pathname: `/Products/${category}`,
                           
                            }}
              
             >

            <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-gray-700"
            //    style={{backgroundImage: `url('${shopInformation.picture}')`}}
               >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center">
                        <div className="text-white text-2xl font-bold text-center" >
                            <span className="absolute inset-0"></span>
                            {category}
                        </div>
                    </h3>
                </div>
            </div>


            </Link>
    )
}

export default CardProducts;
