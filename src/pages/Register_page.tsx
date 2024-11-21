
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../redux/api/userApi';
import Swal from 'sweetalert2';

const Register_page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();
  const [Register_User_Fnc] = useRegisterUserMutation(undefined);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result: any = await Register_User_Fnc({ email, password, name, image:'', address, contact_number: contact });
      console.log(result)
      if (result?.data?.success) {
        Swal.fire("Successfully Register User, Login Now");
        navigate('/login');
      }
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      <div className=" rounded-2xl overflow-hidden h-[700px] flex">
        <img src="https://i.ibb.co.com/nkC60C8/logomn2.png" alt="" />
      </div>
      <form onSubmit={handleRegister} className="card-body flex justify-center max-w-lg mx-auto h-[780px] -mt-5">
        <h1 className="text-3xl font-bold text-center">Register USER</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="enter email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="enter password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="enter full name" className="input input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input onChange={e => setImage(e.target.value)} value={image} type="text" placeholder="enter image url" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input onChange={e => setContact(e.target.value)} value={contact} type="text" placeholder="enter phone number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Address</span>
          </label>
          <input onChange={e => setAddress(e.target.value)} value={address} type="text" placeholder="enter address" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white">Register</button>
          <p>Already have an account ? <Link to={'/login'} className="font-semibold">Go to Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register_page
