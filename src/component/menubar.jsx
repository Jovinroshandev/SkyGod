import { useState } from "react"

export default function Menubar() {
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
    return (
        <>
            {
                !activeSideNav &&
                <div className="bg-blue-900 flex justify-between p-5">
                    <h1 className="text-3xl text-white font-bold">SkyGod</h1>
                    <button onClick={() => setActiveSideNav(true)}><i className="fa-solid fa-bars text-white text-3xl"></i></button>
                </div>
            }
            {
                activeSideNav &&
                <div className="h-screen w-screen bg-[#001e58] flex flex-col">
                    {/* clase button */}
                    <div className="absolute right-0 p-5">
                        <button onClick={() => setActiveSideNav(false)}><i className="fa-solid fa-xmark text-[#a0bfff] text-3xl rounded-full bg-[#1d4699]"></i></button>
                    </div>
                    {/* manu button */}
                    <div className="flex flex-col gap-7 items-center mt-28">
                        {
                            menuBtnList.map(({ menuName, url},index)=>(
                                <button key={index}><p className="text-white font-bold text-2xl border border-white/30 bg-[#4c45aeb4] w-72 text-center p-5 rounded-xl"><a href={url}>{menuName}</a></p></button>
                            ))
                        }
                    </div>
                    {/* Social media accounts */}
                    <div className="flex text-white items-center justify-around mt-20 text-2xl">
                        {
                            socialIcons.map(({ icon, url }, index) => (
                                <a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    className="bg-[#4c45aeb4] border border-white/30 rounded-full p-3">
                                    <i className={`fa-brands ${icon} rounded-full`} />
                                </a>))
                        }
                    </div>
                </div>
            }
        </>
    )
}