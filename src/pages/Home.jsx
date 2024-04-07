import Banner from "../sections/BannerR.jsx";
import Choice from "../sections/ChoiceR.jsx";
import Gift from "../sections/GiftR.jsx";
import Newsletter from "../sections/NewsletterR.jsx";
import Product from "../sections/ProductR.jsx";
import SocialMedida from "../sections/SocialMedida.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Product/>
            <Choice/>
            <Gift/>
            <SocialMedida/>
            <Newsletter/>

        </div>
    )
}
export default Home