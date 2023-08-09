import { SelectedPage } from "@/shared/types";

type Props ={
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
    return <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">

            
        </div>
    </footer>
}

export default Footer
