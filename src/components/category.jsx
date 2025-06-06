import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Category() {
    const [categories, setCategory] = useState([]);
    const [slide, setSlide] = useState(0);
    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories")
        const data = await response.json()
        setCategory(data);
    }

    useEffect(
        () => {
            fetchCategory()
        },[])

    const nextSlide = () => {
        if(categories.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide - 3);
    }
 
  return (
    <div className='max-w-[1200px] mx-auto px-2'>
    <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
        <div className='flex'>
            <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
            rounded-full mx-2' onClick={prevSlide}>
                <FaArrowLeft/>
            </div>
            <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7]
            rounded-full mx-2' onClick={nextSlide}>
                <FaArrowRight/>
            </div>
        </div>    
    </div>
    <div className='flex overflow-hidden'>
        {
            categories.map(
                (cat, index) => {
                    return (
                        <div style={{
                            transform: `translateX(-${slide * 100}%)`
                        }} key={index} className='w-[150px] shrink-0'>
                            <img  src={"http://localhost:5000/images/" + cat.image} alt="" />
                        </div>
                    )

                }
            )
        }
    </div>
    <hr className='my-6 border-gray-100 border-[1px]'/>
    </div>
  )
}

export default Category
