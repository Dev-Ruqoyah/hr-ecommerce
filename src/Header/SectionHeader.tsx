import React from 'react'

interface SectionHeader{
    header:string
}
const SectionHeader:React.FC<SectionHeader> = ({header}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className="h-20 w-10 bg-red-600 rounded-md"></div>
        <p className='text-red-600'>{header}</p>
    </div>
  )
}

export default SectionHeader