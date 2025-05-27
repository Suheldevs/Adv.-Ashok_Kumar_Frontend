// components/Loader.jsx
import React from 'react'

const Loader = () => {
  return (
    <div className="flex bg-black/95 justify-center items-center min-h-screen">
      <div className="w-12 h-12 border-4 border-t-black border-[#ebec82] rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader
