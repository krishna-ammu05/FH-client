import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Import ProductCard compon
import MovingBar from '../components/MovingBar';
  // Import the API function
import { getlivingRoomFurniture } from '../Api/api';
const livingRoomFurniture = () => {
    const [livingRoomFurniture, setlivingRoomFurniture] = useState(null);

    // Function to fetch data
    async function fetchData() {
        try {
            const res = await getlivingRoomFurniture();
            console.log('API Response:', res);  // Log the full response for debugging

            if (res.status === 200) {
                setlivingRoomFurniture(res.data);
            } else {
                console.error("Failed to fetch data, Status:", res.status);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // UseEffect to fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // If data is still being loaded or is empty, show a message
    if (livingRoomFurniture === null || livingRoomFurniture.length === 0) {
        return (
            <>
                No livingRoomFurniture Available
            </>
        );
    }
console.log(livingRoomFurniture)
    // Render Product Cards based on the fetched data
    return (
        <>
         <div>
        <MovingBar/>
          <img className="h-[80vh] w-full object-cover" src="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2022/12/Sleek-and-simple-living-room-decor.jpg?width=900" alt="Furniture 1" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Stylish Designs</h2>
            <p className="mt-2">Commercial and dwelling furniture</p>
          </div>
          </div>
          <div className=" items-center justify-center min-h-screen bg-gray-900">
          <h1 className="text-3xl justify-center items-center py-4 text-white font-bold text-center mb-6">LivingRoom Furnitures</h1>
            <div className="w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 gap-y-20 gap-x-2">
                {livingRoomFurniture.map((furniture, index) => (
                    <ProductCard 
                        image={furniture.img} 
                        name={furniture.title} 
                        offer={furniture.offer} 
                        price={furniture.price} 
                        delivery_time={furniture.delivery_time} 
                        key={furniture._id} 
                    />
                ))}
            </div>
            </div>
        </>
    );
};

export default livingRoomFurniture;
