import BannerBG from "../assets/banner-bg.png";

export default function BannerMain(){
    return(
        <div className="border-4  border-black m-1 md:m-3">
            <div className="h-72 md:h-96"
        style={{
            backgroundImage:`url(${BannerBG})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"cenetr",
    }}
        >
            <h1 className="text-3xl font-bold">$SKYGOD</h1>
        </div>
        </div>
    )
}