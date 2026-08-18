

const ProductCard = ({product}) => {
    
  return (
    <article className="p-4 border">
        <img src={product.image} alt={product.name} />
        <div>
            <span>{product.category}</span>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button>Add to cart</button>
        </div>
    </article>
  )
}

export default ProductCard;
