import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carusel = () => {
    return (
        <div className=' w-full h-97 ' id='home'>
        <Carousel infiniteLoop={true} autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
       
        <div   className=' h-screen bg-no-repeat bg-cover ' style={{ 
backgroundImage: `url("https://edelivery.net/files/cache/2017/12/late-2/174236601.jpg")` 
}}>
       
        </div>
        <div   className='h-screen bg-no-repeat  bg-cover ' style={{ 
backgroundImage: `url("https://www.romamoulding.com/wp-content/uploads/2019/12/19-Christmas-Shipping-Cut-Offs-Banner.jpg")` 
}}> 
{/* `url("https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg")` */}
        
        </div>
        <div   className='h-screen bg-no-repeat  bg-cover ' style={{ 
backgroundImage: `url("https://cdn.grabon.in/gograbon/images/festival/1608630294937.jpg")` 
}}>
{/* `url("https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg")`  */}
        
        </div>
    </Carousel>
    </div>
    )
}

export default Carusel
