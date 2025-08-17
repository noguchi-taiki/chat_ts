import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IconProps {
    link: string;
    icon: string;
}

const Icon = ({link,icon}:IconProps) =>{
    return<>
        <div className="icon">
            <Link href={link}>
                <Image src={icon} alt="icon" width={50} height={50} />
            </Link>
        </div>
    </>
}

export default Icon;