import { Link } from "react-router-dom"


const Login_page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="card-body bg-red-600 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center">LOGIN USER</h1>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <p>Dont have an account ? <Link to={'/register'} className="font-semibold">Create Account</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login_page
