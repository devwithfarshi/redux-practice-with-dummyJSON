

const Cart =()=>{
    return (
        <>
       <div className="mt-8 px-4">
  <div className="flow-root">
    <ul
      className="-my-6 divide-y divide-gray-200"
      role="list"
    >
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">
                  Throwback Hip Bag
                </a>
              </h3>
              <p className="ml-4">
                $90.00
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Salmon
            </p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">
              Qty 1
            </p>
            <div className="flex">
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
            className="h-full w-full object-cover object-center"
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">
                  Medium Stuff Satchel
                </a>
              </h3>
              <p className="ml-4">
                $32.00
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Blue
            </p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">
              Qty 1
            </p>
            <div className="flex">
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
        </>
    )
}

export default Cart
