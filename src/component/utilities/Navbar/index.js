import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-gray-700 py-6 px-4 flex md:flex-row flex-col justify-between gap-2 items-center">
            <div className="">
                <Link href="/" className="font-bold text-white text-4xl">MERTANIMELIST</Link>
            </div>
            <input placeholder="Cari anime.." className="bg-white border-2 rounded-md border-white"  />
        </header>
    )
}

export default Navbar;