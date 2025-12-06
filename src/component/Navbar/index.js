import Link from "next/link";
import InputSearch from "./inputSearch";


const Navbar = () => {
    return (
        <header className="bg-gray-700 py-6 px-4">
            <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
                <Link href="/" className="font-bold text-white text-4xl">MERTANIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar;