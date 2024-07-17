"use client"

import Image from "next/image"

export default function Timeline() {
    return (
    <div className="text-black">    
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-10">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic font-bold">1947</time>
                    <div className="text-lg font-black pt-4">Established</div>
                    <Image src="/tearoom1.jpg" width={350} height={100} alt="" className="mx-auto py-7" />
                    Post WW2, DeTea was originally established as a humble hut where people could sit, 
                    relax, chat, and importatly to enjoy the cups of tea that were served. Mr and Mrs Heinrich humbly
                    started their business within a village area in Brienz, Switzerland.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">1951</time>
                    <div className="text-lg font-black">First Cafe</div>
                    <Image src="/tearoom2.jpg" width={350} height={100} alt="" className="mx-auto rounded-3xl py-7" />
                    4 years after starting off their business, Mr and Mrs Heinrich managed to gather 
                    a lot of attention, customers, and profits made by humbly selling their well-processed 
                    tea and herbs. With the unexpected boom of profits and reputation, they decided to move 
                    to the capital city, Bern, in order to start a new life by opening their first tea cafe.
                    Not only they provided basic tea as well as sunflower tea, they started to provide 11 more 
                    variants of tea along with other refreshments such as macaroons, cupcakes, coconut cakes, 
                    and many more, thanks to Leonie&apos;s expertise and ideas to produce such said refreshments.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">1960</time>
                    <div className="text-lg font-black">First Tea Plantation</div>
                    <Image src="/tea1960.jpg" width={350} height={100} alt="" className="mx-auto rounded-3xl py-7" />
                    Due to high demand and low supply of tea to keep the business afloat at the time, 
                    Mr and Mrs Heinrich started to learn how to grow their own tea. They first bought books related 
                    to basic farming and learned how to plant varieties of herbs at their own backyard. They decided to 
                    purchase a huge piece of land to turn them into tea plantation, and hired people to oversee it 
                    by teaching them how to do manage a plantation, by sharing what they had learned from doing it themselves. 
                    This was the beginning of their huge expansion in their business journey
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">1965</time>
                    <div className="text-lg font-black">Branch Expansion</div>
                    <Image src="/tearoom3.jpg" width={350} height={100} alt="" className="mx-auto rounded-3xl py-7" />
                    DeTea garnered many customers across Europe, from mouth to mouth, or from papers and 
                    even magazines due to how well the quality of the products were. DeTea was finally able to 
                    expand to neighbouring cities and by 1965 DeTea managed to expand to Berlin, our first 
                    international expansion.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">1978</time>
                    <div className="text-lg font-black">Tea Bundles</div>
                    <Image src="/teapack.jpg" width={350} height={100} alt="" className="mx-auto rounded-3xl py-7" />
                    In 1978, with dozens of branches had spread out across the country along in 
                    neighbouring countries, not to mention with plenty variants of mixed herbs that 
                    can be ordered or consumed, the idea was to provide the customers with a way to 
                    carry the happiness home. Mr and Mrs Heinrich finally realized the idea, that was to 
                    also sell their products in a form of packages, free of any chemical and solely relied 
                    on sun rays to preserve the products by drying them.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">2001</time>
                    <div className="text-lg font-black">Further Expansions</div>
                    <Image src="/tearoom4.jpg" width={350} height={100} alt="" className="mx-auto rounded-3xl py-7" />
                    With the passing of Mr and Mrs Heinrich, their legacy left a huge impact in the world 
                    and shed a very positive point of view on how relaxing and healthy a cup of tea and herbs 
                    could be. With their descendants continuing what they started, together with the bond Mr and 
                    Mrs Heinrich had forged along the way, also with the contibutions of bright minded individuals,
                    DeTea continued to expand faraway down to Asian and African regions.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2024</time>
                    <div className="text-lg font-black">Today</div>
                    <Image src="/building.jpg" width={350} height={100} alt="" className="mx-auto rounded-3xl py-7" />
                    Today, DeTea has over 520 branches, and over 120 tea and herbs plantations across the globe. 
                    With the help of thousands of our experts on field to maintain and test the quality produced by the 
                    plantations, as well as our experts in various field, 
                    we will always provide you with our best quality, and make it easier for you to be healthy 
                    and happy just simply by giving you a cup of it.
                </div>
            </li>
        </ul>
    </div>
    )
}