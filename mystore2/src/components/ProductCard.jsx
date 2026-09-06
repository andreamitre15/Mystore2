

const ProductCard = ({product}) => {
    
  return (
    <article className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
        <img src={product.image} alt={product.name}className="w-full h-48 object-cover"/>
        <div className="p-4 space-y-2">
            <span  className="text-xs uppercase tracking-wide text-pink-500 font-semibold">
          {product.category}</span>
            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 font-medium">${product.price}</p>
            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">Add to cart</button>
        </div>
    </article>
  )
}

export default ProductCard;
