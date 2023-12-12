import { Challenge } from "./challenge"

export interface Unit {
    id: number
    title: string
    starterLink: string
    description: string
    imageUrl: string
    link: string,
    challenges: Challenge[]
}