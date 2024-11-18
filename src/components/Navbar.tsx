import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { removeUser } from "../redux/features/authSlice";

const Navbar = () => {

    const { user_id } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const navLinks = <>
        <Link to={'/'}><li><a>Homepage</a></li></Link>
        <Link to={'/product'}><li><a>Products</a></li></Link>
        <Link to={'/cart'}><li><a>Cart</a></li></Link>
        <Link to={'/admin/panel'}><li><a>Admin</a></li></Link>
    </>


    return (
        <div className="navbar bg-red-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">E-Chocolate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="avatar online mr-2">
                        <div className="w-12 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Avatar"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content border menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                        <Link to={'/profile'}>
                            <li><a>Profile</a></li>
                        </Link>
                    </ul>
                </div>


                {
                    user_id ?
                        <button onClick={() => dispatch(removeUser())} className="btn btn-error text-white">Logout</button>
                        :
                        <Link to={'/login'}>
                            <a className="btn btn-primary">Login</a>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
