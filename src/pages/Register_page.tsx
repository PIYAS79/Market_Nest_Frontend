
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../redux/api/userApi';
import Swal from 'sweetalert2';

const Register_page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const [Register_User_Fnc] = useRegisterUserMutation(undefined);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result: any = await Register_User_Fnc({ email, password, name, image });
      console.log(result)
      if(result?.data?.raw?.affectedRows == 1){
        Swal.fire("Successfully Register User, Login Now");
        navigate('/login');
      }
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={handleRegister} className="card-body bg-purple-600 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center">Register USER</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input onChange={e => setImage(e.target.value)} value={image} type="text" placeholder="image" className="input input-bordered" required />
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
