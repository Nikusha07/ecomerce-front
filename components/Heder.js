import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="bg-gray-800 text-white w-full p-4 flex justify-between items-center">
                <Link className="roboto-light-italic" href="/">
                    <span className="text-2xl font-bold cursor-pointer hover:text-red-500 transition duration-300">
                        Ecommerce
                    </span>
                </Link>
            {windowWidth > 630 && (
             <nav className="flex gap-4">
             <Link href="/">
                 <span className="roboto-thin-italic cursor-pointer hover:text-red-500 transition duration-300">Home</span>
             </Link>
             <Link href="/products">
                 <span className="roboto-thin-italic cursor-pointer hover:text-red-500 transition duration-300">All Products</span>
             </Link>
             <Link href="/cart">
                 <span className="roboto-thin-italic cursor-pointer hover:text-red-500 transition duration-300">Cart</span>
             </Link>
             <Link href="/account">
                 <span className="roboto-thin-italic cursor-pointer hover:text-red-500 transition duration-300">Account</span>
             </Link>
         </nav>
            )}
           
        </header>
    );
};
