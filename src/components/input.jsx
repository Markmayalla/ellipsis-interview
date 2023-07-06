import React from 'react'

const Input = ({ label, name, placeholder }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-sm text-white'>{label}</label>
      <input name={name} className='px-3 py-2 bg-white bg-opacity-30 placeholder:text-slate-200 placeholder:text-xs rounded' placeholder={placeholder} />
    </div>
  )
}

export default Input
