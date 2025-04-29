import React, { useEffect, useState } from 'react'
import Card from './Card';

function OnlineDelivery() {
    const [data, setData] = useState([]);
    
    
        const fetchTopRestaurant = async () => {
            const response = await fetch("http://localhost:5000/top-restaurant-chains")
            const apidata = await response.json()
            setData(apidata);
        }
    
        useEffect(
            () => {
                fetchTopRestaurant()
            }, [])
  return (
     <div className='max-w-[1200px] mx-auto px-2'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Restaurants with Online Food Delivery in Shahdara</div>
                </div>
                <div>
                    <div className='max-w-[1200px] mx-auto flex my-4 gap-3 border border-red-500'>
                        <div className='p-3 rounded-md shadow'>Filter</div>
                        <div className='p-3 rounded-md shadow'>Sort By</div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {
                        data.map(
                            (d, i) =>{
                                return <Card {...d} key={i} />
                            }
                        )
                        
                    }
                </div>
      
    </div>
  )
}

export default OnlineDelivery
