// import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomeGraphic from '@/assets/homepage-hero.jpeg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props ={
    setSelectedPage:  (value:SelectedPage) => void;
}

const Home = ({setSelectedPage} : Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return <section id="home" className="bg-primary-600 gap-16 pt-10 mf:h-full">
        <motion.div className="mt-10 pt-4 md:flex md:flex-row-reverse items-center justify-between w-full relative"
        onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
        >

            {/* Main Header */}
            <div className="md:basis-1/2">
                {/* Heading */}
                <div className="p-14 flex flex-col justify-center">

                    <motion.div
                    className="heading"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: 150 },
                        visible: {opacity:1, x:0}
                    }}
                    >
                        <h1 className="text-gray-20 text-[60px] leading-snug">Elevate Your Fitness Experience.</h1>
                        <p className="text-gray-20 py-6">Vivamus suscipit tortor eget felis porttitor volutpat.</p> 
                    </motion.div>
                    

                    {/* Actions */} 
                    <motion.div
                        className="actions"
                        initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: 150 },
                        visible: {opacity:1, x:0}
                    }}
                    >
                        <ActionButton
                            setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>

                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p className="mt-4">Learn More</p>
                        </AnchorLink> 
                    </motion.div>
                    
                </div>

            </div>

            {/* Image */}
            <div className="md:basis-1/2">
                <img src={HomeGraphic} alt="home-graphic" className="rounded-tr-[50vh] rounded-bl-[35vh] md:rounded-bl-[50vh] md:h-[78vh] object-cover"/>
            </div>

            {/* Leaf Decoration */} 
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y:100 },
                visible: {opacity:1, y:0}
                }}
                className="absolute bg-decoration bg-cover bg-center -bottom-16 right-0 md:right-20 h-[150px] w-[100px] md:h-[198px] md:w-[131px] z-10">

            </motion.div>
        </motion.div>
    </section>
}

export default Home;
