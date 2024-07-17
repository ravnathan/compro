import Image from "next/image"

export default function Cards() {
    return (
    <div className="flex justify-evenly text-white pt-20">
        <div className="card card-compact bg-base-200 w-96 shadow-xl">
            <figure>
                <Image src={"/teashop.jpg"} width={400} height={400} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Tea Cafe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, suscipit.</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
        <div className="card card-compact bg-base-200 w-96 shadow-xl">
            <figure>
                <Image src={"/teashelf.jpg"} width={400} height={400} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Mixed of Herbs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, suscipit.</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
        <div className="card card-compact bg-base-200 w-96 shadow-xl">
            <figure>
                <Image src={"/teapacks.jpeg"} width={400} height={400} alt=""/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Tea & Herbs Packs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, suscipit.</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>  
    </div>
    )
}