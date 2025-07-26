import BannerMain from "./component/bannerMain";
import { useState } from "react"
import MenuCloud from "./assets/image/menu-cloude.png";
export default function App(){
  const [activeSideNav, setActiveSideNav] = useState(false)
    const socialIcons = [
        {
            icon: "fa-instagram",
            url: "#"
        }, {
            icon: "fa-facebook-f",
            url: "#"
        }, {
            icon: "fa-x-twitter",
            url: "#"
        }
    ]
    const menuBtnList = [
        {
            menuName:"About",
            url:"#"
        },
        {
            menuName:"Story",
            url:"#"
        },
        {
            menuName:"How to Buy",
            url:"#"
        },
        {
            menuName:"FAQ",
            url:"#"
        },
    ]
  return(
    <div>
      {
                !activeSideNav &&
                <>
                <div className="bg-gray-600 border-4 m-1 md:m-3 border-black flex justify-between items-center p-5">
                    <h1 className="text-2xl drop-shadow-2xl md:text-4xl text-white font-bold">SkyGod</h1>
                    <button className="md:hidden" onClick={() => setActiveSideNav(true)}><i className="fa-solid fa-bars text-white text-3xl"/></button>
                    <div className="hidden md:flex text-black font-bold  gap-16">
                        {
                            menuBtnList.map(({menuName}, index)=>(

                                <button style={{
                                    backgroundImage:`url(${MenuCloud})`,
                                    backgroundSize:"cover",
                                    backgroundRepeat:"no-repeat",
                                    backgroundPosition:"center",
                                    width: "140px",
                                    height: "60px",
                                }}>{menuName}</button>
                            ))
                        }
                    </div>
                    <div className="hidden md:flex gap-7">
                         {
                            socialIcons.map(({ icon, url }, index) => (
                                <a
                                    key={index}
                                    rel="noopener noreferrer"
                                    href={url}
                                    target="_blank"
                                    className="bg-white text-black border border-white/30 rounded-full p-1">
                                    <i className={`fa-brands ${icon} rounded-full`} />
                                </a>))
                        }
                    </div>
                </div>
                    <BannerMain/>
                  </>
            }
            {/* side navbar  */}
            {
                activeSideNav &&
                <div className="m-1 border-4 border-black bg-sky-200 flex flex-col pb-16">
                    {/* clase button */}
                    <div className="absolute right-0 m-5 px-2 py-1.5 rounded-full bg-black">
                        <button onClick={() => setActiveSideNav(false)}><i className="fa-solid fa-xmark text-white text-lg rounded-full"/></button>
                    </div>
                    {/* manu button */}
                    <div className="flex flex-col gap-7 items-center mt-28">
                        {
                            menuBtnList.map(({ menuName, url},index)=>(
                                <button key={index} className="text-black font-bold text-xl border-4 border-black bg-white w-72 text-center p-5 rounded-xl"><a href={url}>{menuName}</a></button>
                            ))
                        }
                    </div>
                    {/* Social media accounts */}
                    <div className="flex text-white items-center justify-around mt-20 text-xl">
                        {
                            socialIcons.map(({ icon, url }, index) => (
                                <a
                                    key={index}
                                    rel="noopener noreferrer"
                                    href={url}
                                    target="_blank"
                                    className="bg-gray-600 border-4 border-black rounded-full p-3 mb-5">
                                    <i className={`fa-brands ${icon} rounded-full`} />
                                </a>))
                        }
                    </div>
                </div>
            }
      {/* <Menubar/> */}
      
    </div>
  )
}