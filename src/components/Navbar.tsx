import { Link, NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { removeUser } from "../redux/features/authSlice";

const Navbar = () => {

    const { user_id, image, role } = useAppSelector(state => state.auth);
    console.log("image", typeof (image))
    const dispatch = useAppDispatch();

    const navLinks = <>
        <NavLink to={'/'}><li><a>Homepage</a></li></NavLink>
        <NavLink to={'/product'}><li><a>Products</a></li></NavLink>
        <NavLink to={'/cart'}><li><a>Cart</a></li></NavLink>
        {
            role == "ADMIN" && <Link to={'/admin/panel'}><li><a>Admin</a></li></Link>
        }
    </>


    return (
        <div className="navbar bg-blue-300 ">
            <div className="navbar-start">
                <nav className="dropdown">
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
                </nav>
                <a className="btn btn-ghost text-xl">
                    <Link to={'/'}>
                        <img width={50} src="https://i.ibb.co.com/2qcCqDx/logomn-removebg-preview.png" alt="" />
                    </Link>
                </a>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </nav>
            <div className="navbar-end">
                {
                    user_id &&
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="avatar online mr-2">
                            <div className="w-12 rounded-full">
                                {
                                    <img
                                        src={image ? image : "https://i.ibb.co.com/TtWzY9p/photo-2024-11-22-00-22-16.jpg"}
                                        alt="Avatar"
                                    />
                                }
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content border menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <Link to={'/profile'}>
                                <li><a>Profile</a></li>
                            </Link>
                            <Link to={'/order-list'}>
                                <li><a>Order List</a></li>
                            </Link>
                        </ul>
                    </div>
                }


                {
                    user_id ?
                        <button onClick={() => dispatch(removeUser())} className="btn bg-blue-500 hover:bg-blue-600 text-white border-none border-none text-white">Logout</button>
                        :
                        <Link to={'/login'}>
                            <a className="btn bg-blue-500 hover:bg-blue-600 text-white border-none">Login</a>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
