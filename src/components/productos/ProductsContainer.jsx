import Products from "./Products";

function ProductsContainer() {
    return (  
        <section id="products" className="h-1/2 w-full" >
                    <h2 className=" text-2xl lg:text-4xl text-center py-8 font-bold " >Nuestros <span className="text-green-800" > Productos</span></h2>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 gap-y-8 " >
                        <Products  img= 'productos/taza.avif' title='Taza de Ceramica' price='$4599' oldPrice='5799' alt="taza de ceramica"  />
                        <Products  img= 'productos/taza.avif' title='Taza de Ceramica' price='$4599' oldPrice='5799' alt="taza de ceramica"  />
                        <Products  img= 'productos/taza.avif' title='Taza de Ceramica' price='$4599' oldPrice='5799' alt="taza de ceramica"  />
                        <Products  img= 'productos/taza.avif' title='Taza de Ceramica' price='$4599' oldPrice='5799' alt="taza de ceramica"  /> 
                        
                    </div>
        </section>
    );
}

export default ProductsContainer;