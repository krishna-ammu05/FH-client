import React, { useEffect, useRef, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react'
import { getOutdoorFurniture, addOutdoorFurnitures, editOutdoorFurnitures,deleteOutdoorFurnitures } from '../../Api/api'
import { toast } from 'sonner'

const AdminOutdoorFurniture = () => {
  //null -> OutdoorFurniture[] | Store the data
  const [currentOutdoorFurnitures, setCurrentOutdoorFurnitures] = useState(null)
  const [OutdoorFurniture, setOutdoorFurniture] = useState(null)
  //true (shows loading screen) -> false(hide loading screen) | Condition Render
  const [loading, setLoading] = useState(true)
  //true(shows addOutdoorFurnitures pop-up)  false(hide)
  const [showAdd,setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  
  const titleRef = useRef('')
  const imgRef = useRef('')
  const priceRef = useRef(0)
  const offerRef= useRef()
  const delivery_timeRef= useRef(0)
  
  const fetchData = async () => {
    try {
      const res = await getOutdoorFurniture()
      if (res.status === 200) {
        console.log(res.data)
        setOutdoorFurniture(res.data)
      }
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }
  const handleAdd = async (e) => {
    e.preventDefault();
    const OutdoorFurnitures = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      offer: offerRef.current.value,
      delivery_time: delivery_timeRef.current.value
    };
    
    try {
      const response = await addOutdoorFurnitures(OutdoorFurnitures);
      if (response.status === 200) {
        console.log("OutdoorFurnitures Added");
        setShowAdd(false);
        fetchData();  // This will refetch the data after adding.
      }
    } catch (error) {
      console.error(error);
    }
  };


  const editHelper = (OutdoorFurnitures) => {
    setCurrentOutdoorFurnitures(OutdoorFurnitures)
    setShowEdit(true)

  }
  const handleEdit = async (e) => {
    e.preventDefault()
    const OutdoorFurnitures = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      offer: offerRef.current.value,
      delivery_time: delivery_timeRef.current.value
    }
    try {
      const response = await editOutdoorFurnitures(OutdoorFurnitures, currentOutdoorFurnitures._id)
      if (response.status === 200) {
        setShowEdit(!showEdit)
        fetchData()
        toast.info("OutdoorFurnitures Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating")
    }
  }


  const handleDelete = async (id) => {
    try {
      const response = await deleteOutdoorFurnitures(id)
      if (response.status === 200) {
        console.log("OutdoorFurnitures Deleted!")

        toast.success("OutdoorFurnitures Deleted")
        fetchData()
      }
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-gray-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!OutdoorFurniture || OutdoorFurniture.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No OutdoorFurniture Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='OutdoorFurniture' />
        <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md
         text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md
          hover:shadow-green-400'
          onClick={() => setShowAdd(!showAdd)} >
          <Plus className='w-8 h-8' />
        </button>
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-gray-500 text-left rounded-md'>
          <tr>
            <th className='p-6'>PID</th>
            <th className='p-6'>Image</th>
            <th className='p-6'>Title</th>
            <th className='p-6'>Price</th>
            <th className='p-6'>Offer</th>
            <th className='p-6'>Delivery_time</th>
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            OutdoorFurniture.map((OutdoorFurnitures, index) => (
              <tr key={index}>
                <td className='p-4'>{OutdoorFurnitures._id} </td>
                <td className='flex justify-start px-4 items-center'><img src={OutdoorFurnitures.img} alt={OutdoorFurnitures.title} className='h-12 w-12 object-cover rounded-full shadow-md bg-gray-500' /></td>
                <td className='p-4'>{OutdoorFurnitures.title} </td>
                <td className='p-4'>{OutdoorFurnitures.price}</td>
                <td className='p-4'>{OutdoorFurnitures.offer}</td>
                <td className='p-4'>{OutdoorFurnitures.delivery_time}</td>
                <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'onClick={() => { editHelper(OutdoorFurnitures) }}>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'onClick={() => handleDelete(OutdoorFurnitures._id)} >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {showAdd && (
  <div className="absolute inset-0 z-50 flex justify-center items-center bg-gray-800/60">
    <div className="h-[75%] w-1/3 flex flex-col bg-gray-100 shadow-2xl rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-gray-200 border-b border-gray-300 rounded-t-lg">
        <h1 className="text-xl font-bold text-gray-600">Add OutdoorFurnitures</h1>
        <div 
          className="text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-600 hover:text-white transition"
          onClick={() => setShowAdd(!showAdd)}
        >
          <X className="h-8 w-8 border-2 border-gray-600 rounded-full" />
        </div>
      </div>
      
      {/* Form */}
      <form 
        className="flex flex-col gap-6 p-6 flex-1 justify-center items-center"
        onSubmit={handleAdd}
      >
        <input 
          ref={titleRef} 
          type="text" 
          id="title" 
          placeholder="Title" 
          className="w-full p-4 bg-gray-50 rounded-md shadow-md outline-none border-b-2 border-transparent focus:border-gray-500 focus:shadow-lg transition" 
          required 
          autoFocus 
        />
        <input 
          ref={imgRef} 
          type="text" 
          id="img" 
          placeholder="Image URL" 
          className="w-full p-4 bg-gray-50 rounded-md shadow-md outline-none border-b-2 border-transparent focus:border-gray-500 focus:shadow-lg transition" 
          required 
        />
        <input 
          ref={delivery_timeRef} 
          type="number" 
          id="Delivery_time" 
          placeholder="Delivery Time (days)" 
          className="w-full p-4 bg-gray-50 rounded-md shadow-md outline-none border-b-2 border-transparent focus:border-gray-500 focus:shadow-lg transition" 
          required 
        />
        <input 
          ref={offerRef} 
          type="number" 
          id="offer" 
          placeholder="Offer (%)" 
          className="w-full p-4 bg-gray-50 rounded-md shadow-md outline-none border-b-2 border-transparent focus:border-gray-500 focus:shadow-lg transition" 
          required 
        />
        <input 
          ref={priceRef} 
          type="number" 
          id="price" 
          placeholder="Price (₹)" 
          className="w-full p-4 bg-gray-50 rounded-md shadow-md outline-none border-b-2 border-transparent focus:border-gray-500 focus:shadow-lg transition" 
          required 
        />
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full h-12 bg--500 text-white font-bold rounded-md shadow-md hover:bg-gray-600 hover:shadow-lg transition"
        >
          Add
        </button>
      </form>
    </div>
  </div>
)}
      {showEdit && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[90%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-blue-500'>Edit OutdoorFurnitures</h1>
                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowEdit(!showEdit) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleEdit}>
                  <input ref={titleRef} type="text" name="" id="title" placeholder='Title' defaultValue={currentOutdoorFurnitures.title} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required autoFocus />
                  <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' defaultValue={currentOutdoorFurnitures.img} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
                  <input ref={priceRef} type="number" name="" id="price" placeholder='Price' defaultValue={currentOutdoorFurnitures.price} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
                  <input ref={offerRef} type="number" name="" id="offer" placeholder='Offer' defaultValue={currentOutdoorFurnitures.offer} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
                  <input ref={delivery_timeRef} type="number" name="" id="Delivery_time" placeholder='Delivery_time' defaultValue={currentOutdoorFurnitures.delivery_time} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />                   <input ref={offerRef} type="number" name="" id="offer" placeholder='Offer'  defaultValue={currentOutdoorFurnitures.offer} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required /><button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-blue-400 bg-blue-500 text-white rounded-sm outline-none">Save</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )

      }
    </div>
  )
}

export default AdminOutdoorFurniture