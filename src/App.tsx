import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    //we want to remove even handler when unmount to reduce memory licks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage ={isTopOfPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
  )
}

export default App;
