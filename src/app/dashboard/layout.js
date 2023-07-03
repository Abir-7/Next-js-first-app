import React from 'react';

const Dashboardlayout = ({children}) => {
    return (
        <div>
            <div>SideNav</div>
         {children}
        </div>
    );
};

export default Dashboardlayout;