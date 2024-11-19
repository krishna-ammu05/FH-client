//import HomeCards from "../components/HomeCards"
import FeatureCards from "../components/FeatureCards"
import HomeCarousel from "../components/HomeCarousel"
import MovingBar from "../components/MovingBar"
import SocialCard from "../components/SocialCard"

const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                
                <HomeCarousel />
                <MovingBar/>
                <FeatureCards/>
                {/* <SocialCard/> */}
                {/* <HomeCards /> */}
            </div>
        </>
    )
}

export default Home