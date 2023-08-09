import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

type Props ={
    setSelectedPage:  (value:SelectedPage) => void;
}

const Home = ({setSelectedPage} : Props) => {

    return (

        <>
            <div className=" ">
            <div className="columns is-gapless is-vcentered">
            <div className="column is-7-desktop is-6-widescreen">
            <div className="image-container" role="img" aria-label="홈페이지제작 웹사이트 요가스튜디오"></div>
            </div>

            <div className="column is-5-desktop is-6-widescreen">
            <div data-aos="fade-in" className="text-container content-wrapper aos-init aos-animate">
            <h1 className="has-text-success mt-0">Elevate Your Fitness Experience.</h1>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. </p>
            </div>
            <div data-aos="fade-up" className="Home-illustration aos-init aos-animate">
            <figure className="image m-0">
            <img src="http://fitness.local/wp-content/uploads/2023/04/Screenshot_2023-04-22_at_4.19.42_PM-removebg-preview.png" alt="Screenshot 2023 04 22 at 4.19.42 PM removebg preview" />
            </figure>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Home;
