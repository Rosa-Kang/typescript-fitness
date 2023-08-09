import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import { Link } from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBg = isTopOfPage ? "bg-primary-600" : "bg-gray-20 drop-shadow"

  return (
    <nav>
      <div
        className={`${navbarBg} ${flexBetween} fixed top-0 z-20 w-full`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.Home)}
                            href={`#${SelectedPage.Home}`}
            >
            <img src={Logo} alt="logo" className="h-20 object-cover"/>
            </AnchorLink> 

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
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
              </div>
            ): (
                <button
                  className="rounded-full bg-secondary-500 p-2 cursor-pointer"
                  onClick={()=> setIsMenuToggled(!isMenuToggled)}
                >
                      <Bars3BottomRightIcon className="h-6 w-6 text-white transition duration-500 hover:text-primary-300" />
                </button>
            )}
            
          </div>
        </div>

      </div>

      {/**Mobile Menu Modal */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">

          <div className="flex justify-end p-12">
            <button
                    className="rounded-full bg-secondary-500 p-2 cursor-pointer"
                    onClick={()=> setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-6 w-6 text-white transition duration-500 hover:text-primary-300" /> 
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
        </div>
      )}


    </nav>
  )
}

export default Navbar
