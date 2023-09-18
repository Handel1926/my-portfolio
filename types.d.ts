import { ReactNode } from "react"

type Section = {
    id: number,
    title: string,
    img_url: string,
    display: boolean,
    message?: string,
    icons?: 
        {
            id: number,
            icon: ReactNode,
            name: string
        }[],
    
    contact?: string[]
}

type monthNames = string[]
type month = string