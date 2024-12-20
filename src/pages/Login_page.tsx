import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin_UserMutation } from "../redux/api/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/authSlice";
import Swal from "sweetalert2";

const Login_page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUserFnc] = useLogin_UserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result: any = await loginUserFnc({ email, password })
      if (result?.error?.status == 403 || result?.error?.status == 404) {
        Swal.fire(result?.error?.data?.Error_Title);
      } else {
        Swal.fire(result.data.message);
        dispatch(setUser(result.data.data));
        navigate('/');
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
      <form onSubmit={handleLogin} className="card-body flex justify-center max-w-lg mx-auto h-[780px] -mt-5">
        <h1 className="text-3xl font-bold text-center">LOGIN USER</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white">Login</button>
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login_page;
