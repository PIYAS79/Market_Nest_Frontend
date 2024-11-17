

const Product_page = () => {
  return (
    <div className="p-5">
      <div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
            <h2 className="card-title">Shoes!</h2>
            <h2 className="card-title">$900</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="flex justify-between w-full items-center">
                <div className="badge badge-secondary">CATEGORY</div>
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Product_page
