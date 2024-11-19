import React, { useEffect, useState } from 'react'
import {  getName } from '../../services/auth'

const AdminTopBar = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    const username = getName()
    setName(username)
  }, [])
  return (
    <div className='w-full h-full shadow-gray-400 shadow-sm flex justify-end items-center px-4'>{name}</div>
  )
}

export default AdminTopBar