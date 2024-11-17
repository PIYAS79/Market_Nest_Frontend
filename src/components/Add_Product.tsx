

const Add_Product = () => {
    return (
        <>
            <h1 className='bg-green-600 text-center font-bold py-2'>Add Product</h1>
            <form className="card-body">
                {/* Product Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered" required />
                </div>

                {/* Category Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                {/* Product Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="" className="input input-bordered" required />
                </div>
                {/* Product Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered" required />
                </div>
                {/* Product Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea placeholder="" className="input input-bordered" required />
                </div>




                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    )
}

export default Add_Product
