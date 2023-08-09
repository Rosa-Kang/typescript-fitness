import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { HText } from "@/shared/HText";

import image1 from '@/assets/yoga-pose-1.jpeg'
import image2 from '@/assets/yoga-pose-2.jpeg'
import image3 from '@/assets/yoga-pose-3.jpeg'
import image4 from '@/assets/yoga-pose-4.jpeg'
import image5 from '@/assets/yoga-pose-5.jpeg'
import image6 from '@/assets/yoga-pose-6.jpeg'
import Class from "./Class";

const classes:Array<ClassType> = [
    {
        name: "Group Fitness",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua.",
        image:image1
    },
    {
        name: "Personal Training",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua.",
        image:image6
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua.",
        image:image3
    },
    {
        name: "Earlybirds Classes",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua.",
        image:image2
    },
    {
        name: "Core Classes",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua.",
        image:image5 
    },
    {
        name: "Vinyasa Yoga Classes",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua.",
        image:image4 
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return <section id="ourclasses" className="w-full bg-primary-600 py-40">
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                hidden: { opacity: 0, x: 150 },
                visible: {opacity:1, x:0}
                }}
            >

                <div className="md:w-3/5 tex-white">
                    <HText textColor="text-gray-20">Our Classes</HText>
                    <p className="py-5 text-gray-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                </div>

            </motion.div>

            <div className="mt-10 h-[353[x] w-full mx-auto md:w-10/12 overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item, index) => (
                    <Class
                            key={`${item.name}-${index}`} 
                            name={item.name}
                            description={item.description}
                            image={item.image}
                    />
                    ))}
                </ul>
            </div>

        </motion.div>
    </section>
}

export default OurClasses
