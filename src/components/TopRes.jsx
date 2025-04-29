import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from './Card';
function TopRes() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestaurant = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains")
        const apidata = await response.json()
        setData(apidata);
    }

    useEffect(
        () => {
            fetchTopRestaurant()
        }, [])

    const nextSlide = () => {
        if (data.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 3);
    }

    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Top Restaurant Chains in Shahdara</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
                rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
                rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                <div className='flex gap-5 transition-transform duration-300 ease-in-out'
                    style={{ transform: `translateX(-${slide * 100}px)` }} >
                    {
                        data.map((d, i) => (
                                <Card width="w-1/2 md:w-[273px]" {...d} key={i}/>
                        ))
                    }
                </div>
            </div>

            <hr className='my-4 border-gray-100 border-[1px]' />

        </div>
    )
}

export default TopRes
