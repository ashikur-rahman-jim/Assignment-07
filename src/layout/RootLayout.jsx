import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <section>
            <NavBar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default RootLayout;