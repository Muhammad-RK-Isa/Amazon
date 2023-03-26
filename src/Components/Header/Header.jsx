import React from 'react';
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    let lastScrollY = window.scrollY;

    window.addEventListener( 'scroll', () => {
        const searchBox = document.getElementById( 'search-box' );

        if ( window.scrollY !== lastScrollY ) {
            searchBox.blur();
        };

        const header = document.getElementById( 'header' );

        switch ( lastScrollY < window.scrollY ) {
            case true:
                switch ( header.classList.contains( 'top-0' ) ) {
                    case true:
                        header.classList.replace( 'top-0', '-top-[74.175px]' );
                        break;
                    case false:
                        header.classList.add( '-top-[74.175px]' );
                        break;
                }
                break;

            case false:
                header.classList.replace( '-top-[74.175px]', 'top-0' );
                break;
        };

        lastScrollY = window.scrollY;
    } );



    return (
        <header id='header' className='flex flex-col w-full bg-black sticky shadow-sm shadow-black transition-all z-50'>
            <nav className='flex items-center justify-between w-full p-4 lg:px-40 bg-black text-white'>
                <img className='w-28' src={ logo } alt="" />
                <ul className='flex items-center justify-center gap-4 lg:gap-8 lg:text-lg text-white'>
                    <Link to='/'><li>Shop</li></Link>
                    <Link to='/cart'><li>Order Review</li></Link>
                    <li className='cursor-pointer'>Inventory</li>
                </ul>
            </nav>

            {/* Search bar */ }
            <div className="flex items-center gap-4 w-full h-full p-4 lg:px-40 bg-[#111111]">
                <input id='search-box' className='w-full outline-none border-none px-1' placeholder='What are you looking for?' spellCheck="false" type="text" />
                <Link className='w-8 h-max' to='/cart'><img className='w-8 h-max' src={ cartIcon } alt="" /></Link>
            </div>
        </header>
    );
};

export default Header;