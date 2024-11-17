import { Link, Outlet } from "react-router-dom"


const Admin_Rootpage = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-red-500 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li className="bg-green-500 py-3 text-center">MARKET NEST</li>
                    <Link to={'panel'}><li><a>Dashboard</a></li></Link>
                    <Link to={'category'}><li><a>Categories</a></li></Link>
                    <Link to={'orders'}><li><a>Orders</a></li></Link>
                    <Link to={'products'}><li><a>Products</a></li></Link>
                    <Link to={'/'}><li><a>Homepage</a></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Admin_Rootpage
