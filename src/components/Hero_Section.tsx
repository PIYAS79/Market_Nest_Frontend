import { Link } from "react-router-dom"


const Hero_Section = () => {
    return (
        <div className="p-16 h-full flex justify-between">
            <div className="w-[50%] h-full flex justify-center flex-col text-center gap-y-3">
                <h1 className="text-5xl mb-3 text-center font-bold">MarketNest</h1>
                <h1 className="text-xl text-center">"Welcome to MarketNest, your ultimate destination for all your shopping needs! Explore a curated selection of high-quality electronics, gadgets, groceries, and household items at unbeatable prices. Whether you're upgrading your tech, stocking up on essentials, or searching for the perfect gift, we have everything you need in one convenient place. Shop confidently with our secure checkout, fast delivery, and exceptional customer service. At MarketNest, we bring value to your doorstep. Start your shopping journey today!</h1>
                <Link to={'/product'}>
                    <button className="btn bg-blue-500 hover:bg-blue-600 text-white border-none mt-3 w-[200px]">View Products</button>
                </Link>
            </div>
            <div className="w-[50%] h-full flex justify-center">
                <img className="h-full rounded-2xl" src="https://i.ibb.co.com/nkC60C8/logomn2.png" alt="" />
            </div>
        </div>
    )
}

export default Hero_Section
