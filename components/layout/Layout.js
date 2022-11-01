import React, { Fragment } from 'react';
import Footer from './Footer';
import dynamic from 'next/dynamic';


const NAvbar = dynamic(() => import('./Navbar'), { ssr: false})


const Layout = ({children}) => {
    return (
        <Fragment>
            <NAvbar />
                {children}
            <Footer />
        </Fragment>
    );
};

export default Layout;