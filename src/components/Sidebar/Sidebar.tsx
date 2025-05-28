import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'
const Sidebar = () => {
  const sidebar: string[] = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty"
  ]

  return (
    <div>
      <ul className="flex flex-col gap-4 ">
        {sidebar.map((sidelink, index) => (
          <li key={index}>
            <div className="flex items-center justify-between">
              <span>{sidelink}</span>
              {index < 2 && <ChevronRight className="text-xs" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
