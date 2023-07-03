'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

const TopDoctor = () => {
    return (
        <div>
            <div>
                <h1 className="text-blue-700 text-center underline underline-offset-4 font-bold text-4xl my-5">Top Doctors</h1>

            </div>

            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                 delay: 2500,
                 disableOnInteraction: false,
               }}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="hero min-h-[30vh] bg-blue-500 rounded-lg mb-5">
                        <div className="hero-content flex-col lg:flex-row">
                            <img style={{ height: '200px' }} src="./doct2.png" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl text-white font-bold">Dr. Kamrul Hasan</h1>
                                <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn bg-blue-700 hover:bg-blue-800  border-none text-white" onClick={() => window.my_modal_1.showModal()}>View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[30vh] bg-blue-500 rounded-lg">
                        <div className="hero-content flex-col lg:flex-row">
                            <img style={{ height: '200px' }} src="./doct1.png" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl text-white font-bold">Dr. Maruf Hosen</h1>
                                <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn bg-blue-700 hover:bg-blue-800  border-none text-white" onClick={() => window.my_modal_2.showModal()}>View Details</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Dr. Kamrul Hasan</h3>
                    <p className="py-4">Neurologist</p>
                    <p className="py-4">Experience: 29+ years</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Name: Dr. Maruf Hosen</h3>
                    <p className="py-4">Surgeon, Cardiologist</p>
                    <p className="py-4">Experience: 19+ years</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default TopDoctor;