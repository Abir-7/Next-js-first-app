'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TopBanner = () => {
    return (
        <Carousel showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true} interval='2000' showThumbs={false} className='text-center rounded-lg'>
            <div>
                <img className=" rounded-lg" src="./doc1.jpg" />
            </div>
            <div className="relative">
                <img className="rounded-lg" src="./doc2.jpg" />
                <div className="absolute rounded-lg bottom-9 md:bottom-20 lg:bottom-60 right-5 md:left-5 md:right-5 "><button className="btn bg-blue-700 hover:bg-blue-800  border-none text-white">Appointment Now</button></div>
            </div>

        </Carousel>
    );
};

export default TopBanner;