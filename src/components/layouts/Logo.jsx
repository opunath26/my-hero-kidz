import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"} className="flex items-center gap-1">
                <Image alt="logo-hero-kidz" src={"/assets/logo.png"} width={50} height={40} />
                <h2 className="font-bold text-xl">Hero <span className="text-primary">Kidz</span></h2>
            </Link>
        </div>
    );
};

export default Logo;