import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBarHeader from '../NavBarsHeaderFooter/NavBarHeader';

const Layout = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const onScrollEvent = () => {
        window.scrollY >= 800 ? setIsScrolled(true) : setIsScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollEvent);
        return () => {
            window.removeEventListener('scroll', onScrollEvent);
        }
    }, []);

    return (
        <div onScroll={onScrollEvent}>
            <NavBarHeader/>
            <div style={{ height: "102px" }}></div>
            {props.children}
        </div>
    );
}

export default Layout;