import React from 'react';
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.svg"

const Header = () => {
    return (
        <div className='flex flex-col w-full bg-black top-0 sticky shadow-sm shadow-black'>
            <nav className='flex items-center justify-between w-full p-4 lg:px-40 bg-black text-white'>
                <img className='w-28' src={logo} alt="" />
                <ul className='flex items-center justify-center gap-4 lg:gap-8 text-lg text-white'>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Order Review</a></li>
                    <li><a href="/">Inventory</a></li>
                </ul>
            </nav>

            {/* Search bar */}
            <div className="flex items-center gap-4 w-full h-full p-4 lg:px-40 bg-[#111111]">
                <input className='w-full outline-none border-none px-1' placeholder='What are you looking for?' spellCheck="false" type="text" />
                <img src={cartIcon} alt="" />
            </div>
        </div>
    );
};

export default Header;