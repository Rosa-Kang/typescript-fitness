import { SelectedPage } from "@/shared/types";
import Logo from '@/assets/Logo.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props ={
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
    return <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <AnchorLink
                    onClick={() => setSelectedPage(SelectedPage.Home)}
                                    href={`#${SelectedPage.Home}`}
                    >
                    <img src={Logo} alt="logo" className="h-20 object-cover"/>
                </AnchorLink> 
                <p className="my-5">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <p>©️INSPIRIT All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orci senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis risus volutpat egestats.</p>
                <p className="my-5">Et gravida id et etiam</p>
                <a className="hover:text-primary-500 transition" href="tel:+3334256852">(333) 425-6825</a>
            </div>
        </div>
    </footer>
}

export default Footer
