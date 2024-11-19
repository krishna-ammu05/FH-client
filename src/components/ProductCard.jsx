
import { IndianRupee, X } from 'lucide-react'

import React, { useRef, useState } from 'react'
import { addOrder } from '../Api/api'
import { toast } from 'sonner'

const ProductCard = ({ name, image, price, offer, delivery_time }) => {
 
  const [showPurchase, setShowPurchase] = useState(false)
    const phoneRef = useRef(0)
    const addressRef = useRef('')
    const handleBuy = async (e) => {
        e.preventDefault()
        const order = {
            uid: uid,
            pid: pid,
            total: price,
            phone: phoneRef.current.value,
            address: addressRef.current.value
        }
        try {
            const response = await addOrder(order)
            if (response.status === 200) {
                toast.success("Order Placed")
                setShowPurchase(false)
            }
        } catch (error) {
            toast.error("Error while placing order")
            console.log(error)
        }
    }

  return (
    <div className="bg-gray-700 text-white rounded-lg shadow-lg w-[19%] h-100 p-5 relative">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-orange-500 text-white font-bold text-xs px-2 py-1 rounded">
        Save {offer}%
      </div>

      {/* Product Image */}
      <img
        src={image}
        alt="Product"
        className="w-full min-h-48 max-h-48 object-cover rounded-lg shadow-md"
      />

      {/* Product Name */}
      <h2 className="text-lg font-bold mt-1">{name}</h2>

      {/* Price Section */}
      <div className="mt-3">
        <IndianRupee className='h-6 w-6' /> {price}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
          Add to cart
        </button>
        <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
          Wishlist
        </button>
      </div>

      {/* Delivery Info */}
      <p className="text-xs text-gray-400 mt-4">
        Delivered within {delivery_time} working days.
      </p>



      {/* {auth && (
      <div className="p-6 pt-0 w-full">
          <button data-ripple-light="true" type="button" className="w-full select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => { setShowPurchase(!showPurchase) }}>
              Buy Now
          </button>
      </div>)} */}
    </div>

    //   {showPurchase && (
    //   <>
    //   <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
    //       <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
    //           <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
    //               <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
    //                   <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Complete Purchase</h1>
    //                   <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowPurchase(!showPurchase) }}>
    //                       <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
    //                   </div>
    //               </div>
    //               <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleBuy}>
    //                   <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required autoFocus />
    //                   <textarea ref={addressRef} name="" id="address" className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm ' cols='8' rows='6' placeholder='Shipping Address' />
    //                   <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Complete</button>
    //               </form>
    //           </div>
    //          </div>
    //        </div>
    //     </>
    //   )
    // }

  )
}

export default ProductCard;
