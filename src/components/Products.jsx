import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {getAllProduct} from "../redux/app/productSlice"
const Products =()=>{
const dispatch=useDispatch()
const {loading, products} =useSelector(state=>state.product)

useEffect(()=>{
    dispatch(getAllProduct())
},[])
    return (
        <>
      <div className="bg-gray-900 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8">
      Introducing Our Latest Product
    </h2>
    {
        loading?<h1>Loading products....</h1>:
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
        products.products && 
            products.products.map((product)=>{
                return(
                    <>
                    <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img
            alt="Product"
            className="object-cover w-full h-full"
            src={product.thumbnail}
          />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
              View Product
            </button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">
            ${product.price}
          </span>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
                    </>
                )
            })
        }
      
      
    </div>
    }
  </div>
</div>
        </>
    )
}

export default Products 
