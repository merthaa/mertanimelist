import Link from "next/link";
import AnimeList from "@/component/AnimeList";

const home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)

  const anime = await response.json()


  return (
    <div>
      <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold md:text-2xl text-xl">Top Anime</h1>
      <Link href="/Top" className="md:text-xl text-md underline hover:text-indigo-700 transition-all">see all</Link>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(data => {
          return (
          <div key={data.mal_id} className="shadow-xl rounded-2xl">
          <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default home;