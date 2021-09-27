import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="container-fluid text-center text-white bg-dark pt-4 pb-4">
                <h3>Vertual Casting-<span className='text-info fs-2'>Director</span> </h3>
                <h4>You are phenomenal, Make your own Biopic with your favourite cast</h4>
                <h4 className="text-primary mt-3">Budget: 10000Million USD</h4>
            </div>
        </div>

    );
};

export default Header;