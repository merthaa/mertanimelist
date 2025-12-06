import Link from "next/link";

const Header = ({title, linkTitle, linkHref}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="font-bold md:text-2xl text-xl">{title}</h1>
            <Link href={linkHref} className="md:text-xl text-md underline hover:text-indigo-700 transition-all">{linkTitle}</Link>
        </div>
    )
}

export default Header