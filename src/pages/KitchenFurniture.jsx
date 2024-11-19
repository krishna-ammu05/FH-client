import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Import ProductCard compon
import MovingBar from '../components/MovingBar';
  // Import the API function
import { getKitchenFurniture } from '../Api/api';
const KitchenFurniture = () => {
    const [KitchenFurniture, setKitchenFurniture] = useState(null);

    // Function to fetch data
    async function fetchData() {
        try {
            const res = await getKitchenFurniture();
            console.log('API Response:', res);  // Log the full response for debugging

            if (res.status === 200) {
                setKitchenFurniture(res.data);
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
    if (KitchenFurniture === null || KitchenFurniture.length === 0) {
        return (
            <>
                No KitchenFurniture Available
            </>
        );
    }

    // Render Product Cards based on the fetched data
    return (
        <>
         <div>
           <MovingBar/>
          <img className="h-[80vh] w-full object-cover" src="https://www.ulcdn.net/media/collection%20and%20listing/Use_the_golden_work_triangle_to_streamline_your_processes.jpg?1695375166" alt="Furniture 1" />
          <div className="absolute left-10 bottom-10 text-white bg-opacity-60 bg-gray-800 p-5 rounded-md">
            <h2 className="text-3xl font-semibold">Modern kitchens</h2>
            <p className="mt-2">Modern and elegant kitchens</p>
          </div>
          </div>
          <div className=" items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-3xl justify-center items-center py-4 text-white font-bold text-center mb-6">Kitchen Furnitures</h1>
            <div className="w-screen h-full flex justify-center items-start flex-row flex-wrap mt-14 gap-y-20 gap-x-2">
                {KitchenFurniture.map((furniture, index) => (
                    <ProductCard 
                        image={furniture.img} 
                        name={furniture.title} 
                        offer={furniture.offer} 
                        price={furniture.price} 
                        delivery_time={furniture.delivery_time} 
                        key={furniture.id} 
                    />
                ))}
            </div>
            </div>
        </>
    );
};

export default KitchenFurniture;
