import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const WithNavlayout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
         <div className='min-h-[70vh]'>
         { children }
         </div>
            <div>
    <Footer></Footer>
            </div>
        </div>
    );
};

export default WithNavlayout;