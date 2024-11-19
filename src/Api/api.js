import axios from 'axios'
import { getToken } from '../services/auth'

//import OfficeFurniture from '../pages/OfficeFurniture'
// const API = 'http://localhost:3000'
//const API = 'https://furniture-hub-server.onrender.com'
const API = 'https://fh-server.onrender.com'

const axiosInstance = axios.create({
    baseURL: API,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = `${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

//const getlivingRoomFurnitures = () => axios.get(`${API}/livingRoomFurnitures/all`)
//const getKitchenFurnitures = () => axios.get(`${API}/kitchenFurnitures/all`)
const getOrders = () =>  axiosInstance.get(`${API}/orders/all`)
const getOrdersCount = () =>  axiosInstance.get(`${API}/orders/count`)
const addOrder = (order) =>  axiosInstance.post(`${API}/orders/add`,order)
const deleteOrder = (id) => axiosInstance.delete(`${API}/orders/delete/${id}`)
//const getLivingRoomFurniture = () => axios.get(`${API}/livingRooms/all`)
//LivingRoomFurnitures
const getlivingRoomFurniture = () => axios.get(`${API}/livingRoomFurnitures/all`)
const addlivingRoomFurnitures= (livingRoomFurniture) =>  axiosInstance.post(`${API}/livingRoomFurnitures/add`, livingRoomFurniture)
const getlivingRoomFurnituresCount = () =>  axiosInstance.get(`${API}/livingRoomFurnitures/count`)
const editlivingRoomFurnitures = (livingRoomFurniture, id) =>  axiosInstance.put(`${API}/livingRoomFurnitures/edit/${id}`, livingRoomFurniture)
const deletelivingRoomFurnitures= (id) =>  axiosInstance.delete(`${API}/livingRoomFurnitures/delete/${id}`)
//BedRoom
const getBedRoomFurniture = () => axios.get(`${API}/BedRoomFurnitures/all`)
const addBedRoomFurnitures= (BedRoomFurniture) =>  axiosInstance.post(`${API}/BedRoomFurnitures/add`, BedRoomFurniture)
const getBedRoomFurnituresCount = () => axiosInstance.get(`${API}/BedRoomFurnitures/count`)
const editBedRoomFurnitures = (BedRoomFurniture, id) =>  axiosInstance.put(`${API}/BedRoomFurnitures/edit/${id}`, BedRoomFurniture)
const deleteBedRoomFurnitures= (id) => axiosInstance.delete(`${API}/BedRoomFurnitures/delete/${id}`)
//OutDoorFurniture
const getOutdoorFurniture = () => axios.get(`${API}/OutdoorFurnitures/all`)
const addOutdoorFurnitures= (OutdoorFurniture) => axiosInstance.post(`${API}/OutdoorFurnitures/add`, OutdoorFurniture)
const getOutdoorFurnituresCount = () => axios.get(`${API}/OutdoorFurnitures/count`)
const editOutdoorFurnitures = (OutdoorFurniture, id) =>  axiosInstance.put(`${API}/OutdoorFurnitures/edit/${id}`, OutdoorFurniture)
const deleteOutdoorFurnitures= (id) => axiosInstance.delete(`${API}/OutdoorFurnitures/delete/${id}`)
//KitchenFurniture
const getKitchenFurniture = () => axios.get(`${API}/KitchenFurnitures/all`)
const addKitchenFurnitures= (KitchenFurniture) =>  axiosInstance.post(`${API}/KitchenFurnitures/add`, KitchenFurniture)
const getKitchenFurnituresCount = () =>  axiosInstance.get(`${API}/KitchenFurnitures/count`)
const editKitchenFurnitures = (KitchenFurniture, id) =>  axiosInstance.put(`${API}/KitchenOutdoorFurnitures/edit/${id}`, KitchenFurniture)
const deleteKitchenFurnitures= (id) =>  axiosInstance.delete(`${API}/KitchenFurnitures/delete/${id}`)
//OfficeFurniture
const getOfficeFurniture = () => axios.get(`${API}/OfficeFurnitures/all`)
const addOfficeFurnitures= (OfficeFurniture) =>  axiosInstance.post(`${API}/OfficeFurnitures/add`, OfficeFurniture)
const getOfficeFurnituresCount = () =>  axiosInstance.get(`${API}/OfficeFurnitures/count`)
const editOfficeFurnitures = (OfficeFurniture, id) =>  axiosInstance.put(`${API}/OfficeOutdoorFurnitures/edit/${id}`, OfficeFurniture)
const deleteOfficeFurnitures= (id) =>  axiosInstance.delete(`${API}/OfficeFurnitures/delete/${id}`)
//users
const getUsers = () =>  axiosInstance.get(`${API}/users/all`)
const getUsersCount = () =>  axiosInstance.get(`${API}/users/count`)
const addUser = (user) => axiosInstance.post(`${API}/users/add`, user)
const editUser = (user, id) =>  axios.put(`${API}/users/edit/${id}`, user)
const resetPassword = (password, id) =>  axios.put(`${API}/users/resetpassword/${id}`, password)
const deleteUser=(id)=> axios.delete(`${API}/users/delete/${id}`)

// const getlivingRoomFurnitureCount = () => axiosInstance.get(`/livingRoomFurniture/count`)

// const getBedRoomFurnitureCount = () => axiosInstance.get(`/BedRoomFurniture/count`)
// const getOutdoorFurnitureCount = () => axiosInstance.get(`/OutdoorFurniture/count`)
// const getOfficeFurnitureCount = () => axiosInstance.get(`/OfficeFurniture/count`)
// const getKitchenFurnitureCount = () => axiosInstance.get(`/kitchenFurniture/count`)

//LOgin && Register
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)
export { 
    Login,
    Register,
    getOrders,
    addOrder,
    getOrdersCount,
    deleteOrder,
    getlivingRoomFurniture,
    addlivingRoomFurnitures,
    editlivingRoomFurnitures,
    deletelivingRoomFurnitures,
    getlivingRoomFurnituresCount,
    getBedRoomFurniture,
    addBedRoomFurnitures,
    editBedRoomFurnitures,
    deleteBedRoomFurnitures,
    getBedRoomFurnituresCount,
    getOutdoorFurniture,
    addOutdoorFurnitures,
    editOutdoorFurnitures,
    deleteOutdoorFurnitures,
    getOutdoorFurnituresCount,
    getKitchenFurniture,
    addKitchenFurnitures,
    editKitchenFurnitures,
    deleteKitchenFurnitures,
    getKitchenFurnituresCount,
    getOfficeFurniture,
    addOfficeFurnitures,
    editOfficeFurnitures,
    deleteOfficeFurnitures,
    getOfficeFurnituresCount,
    getUsers,
    getUsersCount,
    addUser,
    editUser,
    resetPassword,
    deleteUser
//     getlivingRoomFurnitureCount ,
//     getBedRoomFurnitureCount ,
//     getOutdoorFurnitureCount ,
//     getOfficeFurnitureCount ,
//     getKitchenFurnitureCount 
}


// import axios from 'axios'
// const API = 'http://localhost:3000'

// // livingRoomFurnitureEndPonts
// const getlivingRoomFurnitures = () => axios.get(`${API}/livingRoomFurnitures/all`)
// const addlivingRoomFurniture = (livingRoomFurniture) => axios.post(`${API}/livingRoomFurnitures/add`, livingRoomFurniture)

// // OrderEndPonts
// const getOrders = () => axios.get(`${API}/orders/all`)

// //UserEndPoints
// const getUsers = () => axios.get(`${API}/users/all`)

// //AuthEndponts
// const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
// const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

//export { getlivingRoomFurnitures, getOrders, getUsers, Login, Register }
//export { getlivingRoomFurnitures, getOrders, getUsers, Login, Register, addlivingRoomFurniture }