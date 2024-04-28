import React from 'react'

function Button({className, name, onClick}:{className?: string; name: string; onClick?: (val?: string) => void}) {
  return (
    <button className="bg-black border-2 hover:bg-white/5 hover:text-black transition-all duration-300 text-white rounded-full font-medium border-black py-3 px-6 hover:shadow-xl">
   {name}
  </button>
  )
}

export default Button