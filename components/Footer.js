import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-4">Ecommerce</h3>
                    <p className="text-sm">Your ultimate shopping experience.</p>
                </div>
                <div className="flex gap-4">
                    <Link href="/">
                        <span className="text-sm hover:text-red-500 transition duration-300">Home</span>
                    </Link>
                    <Link href="/products">
                        <span className="text-sm hover:text-red-500 transition duration-300">All Products</span>
                    </Link>
                    <Link href="/cart">
                        <span className="text-sm hover:text-red-500 transition duration-300">Cart</span>
                    </Link>
                    <Link href="/account">
                        <span className="text-sm hover:text-red-500 transition duration-300">Account</span>
                    </Link>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-sm">
                    Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> Nika Tefnadze
                </p>
            </div>
            <style jsx>{`
                footer {
                    animation: fadeIn 1.5s;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </footer>
    );
};
