import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import Logo from '../../assets/img/logo.jpg'



const AdminLeftBar = () => {
  const Navigate = useNavigate()
  const Linksdata = [
    {
        title: 'Dashboard',
        path: '/admin/dashboard'
    },
    {
        title:'Users',
        path:'/admin/users'
    },
    {
      title:'Orders',
      path:'/admin/orders'
  },
  {
    title:'LivingRoomFurnitures',
    path:'/admin/LivingRoomFurnitures'
  },
  {
    title:'BedroomFurnitures',
    path:'/admin/BedRoomFurnitures'
  },
  {
    title:'OutdoorFurnitures',
    path:'admin/OutDoorFurnitures'
  },
  {
    title:'KitchenFurnitures',
    path:'/admin/KitchenFurnitures'
  },
  {
    title:'OfficeFurnitures',
    path:'admin/OfficeFurnitures'
  },
  {
    title:'Settings',
    path:'/admin/settings'
}

  ]
  const handleLogout = () => {
    localStorage.removeItem('token')
    Navigate('/')
  }

  return (
    <div className='w-full h-screen shadow-gray-500 shadow-md flex justify-center items-center'>
      <div className='h-full w-full flex flex-col'>
      <div className="flex items-center space-x-5 px-6 h-[10%]">
          <img src={Logo} alt="logo" className="h-10 w-10 rounded-full " />
          <span className=" text-2xl font-bold text-gray-700">
            Furniture Hub
            </span>
        </div>
        {/* <div className='h-[10%] w-full text-gray-500 flex justify-center font-bold text-2xl items-center'>
          Furniture Hub
         </div> */}
         <div className='h-[80%] w-full flex flex-col items-center '>
          {Linksdata.map((link, index) => (
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-gray-500/90 hover:text-white flex justify-start font-semibold items-center rounded-sm shadow-md'>
              {link.title}
            </NavLink>
          ))
        }
        </div>
        <div className='h-[10%] w-full flex items-end'>
          <div className=' px-8 bg-gray-500 w-full h-2/3 text-white flex justify-start font-bold items-center cursor-pointer' onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}


export default AdminLeftBar