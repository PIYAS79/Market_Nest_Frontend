
const Cart_page = () => {
    return (
        <div className="flex max-w-7xl mx-auto gap-3 p-5">
            <div className="w-[50%] grid gap-y-3">


                <div className="bg-purple-400 flex justify-between rounded-xl overflow-hidden">
                    <div className="p-5">
                        <h1 className="font-bold text-2xl">Product Title</h1>
                        <h1>Quantity : 2</h1>
                        <h2>Price : $90</h2>
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlfmfSxo4N9PTs-FUH1Q5fMCGu24SlxkSfDQ1X93-wFRVCUZFF1noFKdFaSrTiSdTmGE&usqp=CAU" alt="" />
                    </div>
                </div>
                



            </div>
            <div className="w-[50%] bg-red-500 text-center h-[200px]">
                <h1 className="text-2xl bg-blue-400 py-2 font-bold">Purchase Section</h1>
                <h1 className="text-xl font-bold mt-2">Total</h1>
                <h1 className="text-4xl font-bold">$200</h1>
                <button className="btn btn-primary mt-3">Purchase Now</button>
            </div>
        </div>
    )
}

export default Cart_page
