import Image from "next/image"

export default function Culture() {
    return (
        <div className="pt-48">
            <div className="pt-24 flex-row gap-20 lg:flex bg-green-950">
                <p className="text-center my-auto px-10 text-white">With our mission to spread joy and happiness from a cup of relaxing tea, 
                   it applies just the same for our workspaces. We can&apos;t spread joy to the outside 
                   if we are not happy on the inside. Tension-free workplaces is what we are aiming for. 
                </p>
                <Image src={"/workspace2.jpg"} width={380} height={400} alt="DeTea workspace" className="mx-auto lg:mx-20 py-10"/>
            </div>
            <div className="py-12 flex-row gap-10 lg:flex bg-white text-black">
                <Image src={"/farmer1.jpg"} width={380} height={380} alt="DeTea workspace2" className="mx-auto lg:mx-20 py-10"/>
                <p className="text-center my-auto px-10">We value our connections to local farmers, with those bonds we forged along the way, 
                    we have invaluable network that would work as a medium to both benefit us and benefit 
                    the farmers without any drawbacks. The passion we share along with the local farmers 
                    is unbreakable.
                </p>
            </div>
            <div className="py-12 flex-row gap-10 lg:flex bg-green-950">
                <p className="text-center my-auto px-10 text-white">To reach places that used to be difficult, we relied on the experts to market all of 
                    our products away up to South Africa and Indonesia, the idea that used to be difficult 
                    to execute due to how far it is from our HQ, Switzerland.
                </p>
                <Image src={"/workspace4.jpg"} width={380} height={300} alt="DeTea marketing" className="mx-auto lg:mx-20 py-10"/>
            </div>
            <div className="py-24 flex-row gap-10 lg:flex bg-white text-black">
                <Image src={"/workspace1.jpg"} width={340} height={300} alt="DeTea team1" className="mx-auto lg:mx-20 py-10"/>
                <p className="text-center my-auto px-10">No matter what kind of background our workers have, they are always welcome to join us. 
                    We always want to work with people who want to make a positive change to the community 
                    no matter how minor it is.
                </p>
            </div>
            
        </div>
    )
}