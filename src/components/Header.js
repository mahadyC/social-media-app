import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <div>
            <header>
                <h2>BravoFA</h2>
                <div className="inputSearch">
                    <input type="text" name="search" id="search" placeholder="&#61442;" />
                </div>
               <Nav/>
                <div className="notification">
                    
                </div>
            </header>
        </div>
    );
};

export default Header;