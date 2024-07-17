"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface IUser {
        name : {
            first: string
            last: string
        },

        email: string,

        picture : {
            large: string
        }
}



export default function TeamCards() {

    const [user, setUser] = useState<IUser[]>([])

    const getData = async () => {
            const res = await fetch('https://randomuser.me/api/?results=10',{
                cache: "no-cache"
            })
            const data = await res.json()
            setUser(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const expertise: string[] = [
        "CEO", "CFO", "COO", "Marketing Specialist", "Chief Marketing Officer",
        "Human Resources", "Production Manager", "Sales Representative", "Chief Marketing Officer", "Business Analyst"
    ]

    return (
        <main>
            {user.map((item, idx) => (
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