import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HikeCard from '../components/cards/HikeCard'
import {getFeaturedHikes} from '../data/api-data'
import Search from '../components/Search'

export default function HomePage(props) {
  const router = useRouter()
  const findLocation = (selectedLocation) => {
    console.log('Searching for: ', selectedLocation)
    router.push(`/events/location/${selectedLocation}`)
  }

  const {featuredHikes} = props

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="my-8 text-5xl font-semibold">
        Welcome to <span className="text-indigo-500">Sanpo Trails!</span>
      </h2>

      <div className="">
        <Link href="/events">
          <p className="mt-4 cursor-pointer rounded-md border border-slate-300 py-2 px-2 text-center hover:bg-slate-300 hover:text-black">
            View Hikes Here
          </p>
        </Link>
        <p className="my-3 text-center">Or</p>

        <Search onSearch={findLocation} />
      </div>

      <div className="flex flex-col">
        <h3 className="mt-12 border-b py-4 text-center text-3xl font-semibold uppercase">
          Featured Hikes
        </h3>
        {featuredHikes.map((hike) => (
          <HikeCard key={hike.id} trail={hike} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const featuredHikes = await getFeaturedHikes()

  return {
    props: {
      featuredHikes,
    },
    revalidate: 3600,
  }
}
