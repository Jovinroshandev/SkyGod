import { motion } from "framer-motion";
import BannerBG from "../assets/image/banner-bg.png";
import GodImage from "../assets/image/skygod.png";
import Cloud1 from "../assets/image/cloud1.png";
import Cloud2 from "../assets/image/cloud2.png";
import Cloud3 from "../assets/image/cloud3.png";
import Lightning from "./Lightning";

export default function BannerMain() {
  return (
    <div className="border-4 border-black m-1 md:m-3">
      <div
        className="relative h-72 md:h-96 flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${BannerBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Lightning>
          {/* Title Animation */}
          <motion.h1
            initial={{ y: "0px" }}
            animate={{ y: "5px" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 3,
            }}
            className="absolute top-0 text-3xl md:text-8xl font-bold text-white drop-shadow-[0_0_3px_black] font-[Orbitron]"
          >
            $SKYGOD
          </motion.h1>

          {/* God Image Animation */}
          <motion.img
            initial={{ scale: 1}}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute bottom-2 z-40 w-60"
            src={GodImage}
            alt="Sky god illustration"
          />

          {/* Animated Clouds */}
          <motion.img
            className="absolute top-10 left-0 w-36"
            src={Cloud1}
            alt="Cloud 1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <motion.img
            className="absolute right-0 top-16 w-48"
            src={Cloud2}
            alt="Cloud 2"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />

          <motion.img
            className="absolute top-44 left-1 w-36"
            src={Cloud3}
            alt="Cloud 3"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </Lightning>
      </div>
    </div>
  );
}
