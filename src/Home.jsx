
import ProductR from "./sections/ProductR.jsx";
import ChoiceR from "./sections/ChoiceR.jsx";
import GiftR from "./sections/GiftR.jsx";
import SocialMedida from "./sections/SocialMedida.jsx";
import NewsletterR from "./sections/NewsletterR.jsx";
import BannerR from "./sections/BannerR.jsx";

  const Home = () => {

    return(
        <div>
            <div>
                <BannerR/>
                <ProductR/>
                <ChoiceR/>
                <GiftR/>
                <SocialMedida/>
                <NewsletterR/>
            </div>
        </div>
    )
  }

  export default Home