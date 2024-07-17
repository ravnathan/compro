"use client"

import { arch } from "./font"
import Image from "next/image"

export default function Testimonials() {
    return (
        <div className="bg-green-950">
            <div className={arch.className}>
                <h1 className="text-5xl text-white text-center py-10">Our satisfied customers</h1>
            </div>
            <div className="ml-5 lg:ml-28">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={"/farraos.jpg"} width={100} height={100} alt="farraos" />
                        </div>
                    </div>
                    <div className="chat-bubble">
                    &quot;As a health-conscious individual, finding a tea cafe like this
                        has been a blessing. Their selection of herbs is impressive, and each cup feels
                        like a rejuvenating boost for my well-being.&quot;
                        <p className="text-right">
                            -M. Farraos Abdillah
                        </p>
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={"/jovin.jpg"} width={100} height={100} alt="jovin" />
                        </div>
                    </div>
                    <div className="chat-bubble">
                    &quot;I&apos;ve traveled extensively in search of the perfect cup of tea, and I can confidently
                        say this cafe stands out. Their attention to sourcing premium herbs results in teas that
                        are both flavorful and authentic.&quot;
                        <p className="text-right">
                            -Vinsensius Jovinda
                        </p>
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={"/fahmi.jpg"} width={100} height={100} alt="fahmi" />
                        </div>
                    </div>
                    <div className="chat-bubble">
                    &quot;Not only does this cafe serve exceptional tea, but their commitment to
                        sustainability is inspiring. From their eco-friendly packaging to their support
                        of local growers, every sip feels good for the planet.&quot;
                        <p className="text-right">
                            -Fahmi Irvansyah
                        </p>
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={"/KaIlham.jpg"} width={100} height={100} alt="fahmi" />
                        </div>
                    </div>
                    <div className="chat-bubble">
                    &quot;Stepping into this tea cafe is like entering a sanctuary.
                        The serene ambiance combined with the soothing aroma of their herbal
                        blends creates a perfect environment to unwind and relax.&quot;
                        <p className="text-right">
                            -Ilham Hidayatulloh
                        </p>
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={"/Radid.jpg"} width={100} height={100} alt="Radid" />
                        </div>
                    </div>
                    <div className="chat-bubble">
                    &quot;For someone who appreciates gourmet experiences, this tea cafe is a hidden gem.
                        Their teas are curated with such care that each visit promises a new and delightful
                        flavor adventure.&quot;
                        <p className="text-right">
                            -Radid Desfandri
                        </p>
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={"/Maul.jpg"} width={100} height={100} alt="Radid" />
                        </div>
                    </div>
                    <div className="chat-bubble">
                    &quot;I love supporting businesses that care about their community, and this tea cafe does
                        just that. They host events, support local artists, and truly embody the spirit of a
                        neighborhood hub.&quot;
                        <p className="text-right">
                            -Maulana Syahjhad
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}