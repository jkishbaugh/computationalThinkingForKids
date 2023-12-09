import { Challenge } from "../../interfaces/challenge"

export interface Unit {
    id: number
    title: string
    starterLink: string
    description: string
    challenges: Challenge[]
    imageUrl: string
    link: string
}