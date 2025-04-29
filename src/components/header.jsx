import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <CiSearch/>,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: <IoIosHelpBuoy/>,
            name: "Help"
        },
        {
            icon: <GoSignIn/>,
            name: "Sign In"
        },
        {
            icon: <CiShoppingCart/>,
            name: "Cart"
        }
    ]
    return (
        <>
            <div className='black-overlay fixed h-full w-full duration-500' onClick={hideSideMenu}
                style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden", zIndex: 999999999}}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className='w-[500px] bg-white h-full absolute duration-300'
                    style={{ left: toggle ? "0%" : "-100%" }}></div>
            </div>
            <header className='p-[15px] shadow-xl text-[#685b78] sticky top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[50px]'>
                        <img src="images/logo.png" className='w-full' alt="" />
                    </div>

                    <div className='ml-4'>
                        <span className='font-bold border-b-[3px]'>Shahdara</span> Lahore,
                        Punjab, Pakistan<FaCaretDown onClick={showSideMenu} fontSize={25} className='font-bold cursor-pointer inline text-[0.9rem] text-[#fc8019]' />
                    </div>
                    <nav className='hidden md:flex list-none gap-7 ml-auto font-semibold text-[18px]'>
                        
                        {
                            
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </li>
                                }
                            )
                        }
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header
