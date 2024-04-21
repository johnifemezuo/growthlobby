import React from 'react'

function Button({className, name}:{className?: string; name: string}) {
  return (
    <button className="bg-black text-white rounded-3xl py-3 px-6 transition-all hover:bg-black/80">
   {name}
  </button>
  )
}

export default Button