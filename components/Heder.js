import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link className="roboto-light-italic" href="/">
                <span className="text-2xl font-bold cursor-pointer hover:text-red-500 transition duration-300">
                    Ecommerce
                </span>
            </Link>
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
        </header>
    );
};
