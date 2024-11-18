import { Link } from "react-router-dom"


const Homepage = () => {
  return (
    <div className="bg-red-600 h-[calc(100vh-4.4rem)]">
      <div className="p-16 bg-pink-400 h-full flex justify-between">
        <div className="w-[50%] h-full bg-red-500 flex justify-center flex-col">
          <h1 className="text-5xl mb-3">E-Chocolate</h1>
          <h1 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio sint ullam nam! Quos assumenda itaque odit eum similique? Consequuntur assumenda voluptate quod at. Exercitationem, itaque unde! Aspernatur, obcaecati tempora!</h1>
          <Link to={'/product'}>
            <button className="btn btn-primary mt-3 w-[200px]">View Products</button>
          </Link>
        </div>
        <div className="w-[50%] h-full bg-blue-500">
          ADD A IMGAGE
        </div>
      </div>
    </div>
  )
}

export default Homepage
