
import Category_Section from "../components/Category_Section"
import Default_Product from "../components/Default_Product"
import Hero_Section from "../components/Hero_Section"


const Homepage = () => {
  return (
    <div className="h-[calc(100vh-4.4rem)] overflow-y-scroll">
      <Hero_Section />
      <Category_Section />
      <Default_Product />
    </div>
  )
}

export default Homepage
