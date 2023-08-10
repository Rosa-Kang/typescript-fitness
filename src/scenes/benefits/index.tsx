import { HText } from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

import Icon from '@/assets/benefits-icon.png';
import Benefit from './Benefit';

const benefits:Array<BenefitType> = [
    {
        icon: <img src={Icon} alt="benefits-icon" />,
        title: "Personal Training",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua."
    },
    {
        icon: <img src={Icon} alt="benefits-icon" />,
        title: "Group Fitness",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua."
    },
    {
        icon: <img src={Icon} alt="benefits-icon" />,
        title: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt magna aliquyam erat, sed diam voluptua."
    },
]

const container = {
    hidden: {},
    visible:{
        transition:{staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
    return <section id="benefits" className='py-20 bg-gray-20'>
        <motion.div
        className='mx-auto min-h-full w-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        > 
            {/* Header */}
            <motion.div
                className='md:my-5 md:w-3/5'
                initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.3, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity:1, x:0}
                    }}
            >
                <HText>More than just Yoga</HText>
                <p className='my-5 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.</p>
            </motion.div>

            {/* Benefits */}
            <motion.div
                className="mt-5 md:flex items-center justify-between gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                variants={container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>
    </className=>
}

export default Benefits
