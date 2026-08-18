import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <section>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;

