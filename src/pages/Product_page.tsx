

const Product_page = () => {
  return (
    <div className="p-5 max-w-7xl mx-auto overflow-y-scroll h-[calc(100vh-4.4rem)]">
      <div className="grid grid-cols-3 gap-y-5 h-full">


        {
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://www.health.com/thmb/QEDERVgktTQA_KwXSCqRYPrRJrU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1448038415-ad65b0afdb084055ac1b93703db77c85.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">Demo {index + 1}!</h2>
                  <h2 className="card-title">$90</h2>
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
          ))
        }




      </div>
    </div>
  )
}

export default Product_page
