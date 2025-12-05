import Image from "next/image";

const AnimeList = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-emerald-400">
                <Image src="https://placehold.co/600x400" alt="..." width={600} height={400} unoptimized/>
            </div>
            <div className="bg-emerald-400">Grid 2</div>
            <div className="bg-emerald-400">Grid 3</div>
        </div>
    )
}


export default AnimeList;