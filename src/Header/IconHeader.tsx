import React, { useState } from "react"
import { Heart, HeartOff, ShoppingCart, ShoppingCartIcon } from "lucide-react"

const IconHeader = () => {
  const [liked, setLiked] = useState(false)
  const [inCart, setInCart] = useState(false)

  return (
    <div className="flex items-center gap-2">
      {/* Like / Unlike */}
      <button
        className="p-2 rounded-full hover:bg-gray-100"
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        ) : (
          <Heart className="w-5 h-5 text-black" />
        )}
      </button>

      {/* Add to cart / Remove from cart */}
      <button
        className="p-2 rounded-full hover:bg-gray-100"
        onClick={() => setInCart(!inCart)}
      >
        {inCart ? (
          <ShoppingCart className="w-5 h-5 text-green-600 fill-green-600" />
        ) : (
          <ShoppingCart className="w-5 h-5 text-black" />
        )}
      </button>
    </div>
  )
}

export default IconHeader
