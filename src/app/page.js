import Link from "next/link";
import AnimeList from "@/component/AnimeList";
import Headers from "@/component/AnimeList/header";

const home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()


  return (
    <>
      <section>
        <Headers title="Top Anime" linkTitle="see all" linkHref="/topAnime" />
        <AnimeList api={topAnime} />
      </section>

    </>
  )
}

export default home;