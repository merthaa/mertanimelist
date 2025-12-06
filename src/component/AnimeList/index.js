import Image from "next/image";
import Link from "next/link";

const AnimeList = ({title, images, id}) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src={images} alt="..." width={350} height={750} className="w-full max-h-200 object-fill" unoptimized/>
            <h3 className="font-bold md:text-2xl text-xl p-3">{title}</h3>
        </Link>
    )
}


export default AnimeList;