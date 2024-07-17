import { Metadata } from "next"
import Image from "next/image"

export const metadata : Metadata = {
    title: "Teams",
    description: "DeTea's team lineups"
}

interface IUser {
    name: {
        first: string
        last: string
    },
    email: string,
    picture: {
        large: string
    }
}



export default async function TeamCards() {

        const res = await fetch('https://randomuser.me/api/?results=10')
        const data = await res.json()

    


    const expertise: string[] = [
        "CEO", "CFO", "COO", "Marketing Specialist", "Chief Marketing Officer",
        "Human Resources", "Production Manager", "Sales Representative", "Chief Marketing Officer", "Business Analyst"
    ]

    return (
        <main>
            {data.results.map((item : IUser, idx: number) => (
                <div className="flex flex-wrap justify-center gap-7 pb-7 lg:inline-flex lg:p-7" key={item.email}>
                    <div className="card card-compact bg-green-950 w-[280px] text-white shadow-xl">
                        <figure>
                            <Image src={item.picture.large} width={280} height={280} alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name.first} {item.name.last}</h2>
                            <p className="font-bold underline">{expertise[idx]}</p>
                            <p>Contact:</p>
                            <p>{item.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}