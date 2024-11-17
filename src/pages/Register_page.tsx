
import { Link } from 'react-router-dom'

const Register_page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="card-body bg-purple-600 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center">Register USER</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="email" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="password" placeholder="image" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <p>Already have an account ? <Link to={'/login'} className="font-semibold">Go to Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register_page
