
const Add_Category = () => {
    return (
        <>
            <h1 className='bg-green-600 text-center font-bold py-2'>Add Catetegory</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input type="email" placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    )
}

export default Add_Category
