import { products, assets } from "../../assets/images/frontend_assets/assets";
import Banner from "../../Components/banner/Banner";
import Section from "../../Components/section/Section";



const Home = () => {
  return (
    <div className='container'>
      <Banner bannerPic={assets.hero_img} />
      <Section
        sectionTitle="Latest Collections"
        sectionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum."
        products={products.slice(5, 13)}
      />

      <Section
        sectionTitle="BEST SELLERS"
        sectionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum."
        products={products.filter(product => product.bestseller === true).slice(2,6)}
      />
    </div>
  )
}

export default Home
