import "./Products.css"

export function Products ({products}){

    return(
        <main>
            <ul className="products">
                {products && products.slice(0,10).map(product =>{
                   return <li key={product.id}>
                        <img
                         src={product.image}
                         alt={product.product_name}
                        />
                        <div>
                            <strong>{product.product_name}</strong> - ${product.price}
                        </div>
                        <button>Al Carrito</button>
                    </li>
                })}
            </ul>
        </main>
    )
}