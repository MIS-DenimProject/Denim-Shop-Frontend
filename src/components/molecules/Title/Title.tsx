import type { FC } from "react"
import { cn } from "@/utils"
import type { TitleProps } from "@/utils"
import { SubHeadingText } from "@/components"
import { HeadingText } from "@/components/atoms/Heading Text/HeadingText"


export const Title:FC<TitleProps> = ({titleHeading,titleSubheading,className})=>{
    return(
        <div className={cn(``,className)}>
            <HeadingText headingText={titleHeading} className=""/>
            <SubHeadingText headingText={titleSubheading} className=""/>
        </div>
    )
}