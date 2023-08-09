import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import { Link } from "./Link";
import { SelectedPage } from "../shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" className="w-32 h-32"/>

            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>

              <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
              </div>
            </div>
            ): (
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={()=> setIsMenuToggled(!isMenuToggled)}
                >
                  {
                    isMenuToggled? <Bars3BottomRightIcon className="h-6 w-6 text-white" /> :             <XMarkIcon className="h-6 w-6 text-white" />
                  }
                </button>
        )}
            
          </div>
        
        </div>
      </div>

    </nav>
  )
}

export default Navbar
