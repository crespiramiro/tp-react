function Products(props) {
    return ( 
        <div className="h-auto flex flex-col gap-y-1 w-auto rounded-lg shadow-lg justify-center items-center mx-2 " >
                <img src={props.img} alt="{props.alt}" className="rounded-md pb-1" />
                <h2 className="text-center" >{props.title}</h2>
                <div className="prices p-1 flex flex-row gap-x-2 justify-center ">
                    <h3 className="text-green-600" >{props.price}</h3>
                    <h3 className="line-through opacity-50 " >{props.oldPrice}</h3>
                </div>
                <button className="bg-green-700 p-2 mb-4 rounded-md text-center " >
                    <p className="text-white text-semibold text-center " >Agregar al Carrito</p>
                </button>
        </div>
     );
}

export default Products;