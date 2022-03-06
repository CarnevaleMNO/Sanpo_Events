import HikeCard from '../../components/cards/HikeCard'
import { useRouter } from 'next/router'
import { getTrails } from '../../data/api-data'


export default function FilteredTrails({trails}) {
  const router = useRouter()
  const { query } = router
  const slug = query.slug

  if(!slug) {
    return <h1>No slug</h1>
  }

  console.log(slug)

  const availableLocations = [
    "Japan",
    "Australia",
    "USA", 
    "New Zealand",
  ]

  if(availableLocations.includes(slug[1]) === false) {
    return <h1>Sorry, there are no trails for this location yet.</h1>
  }

  console.log(trails)

  return (
    <div>
      <h2 className="my-10 text-3xl text-center">Here are all upcoming events in {slug[0]}: {slug[1]}!</h2>
      {trails.map((trail) => (
        <HikeCard trail={trail} key={trail.id} />
      ))}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug
  const country = slug[1]
  const trails = await getTrails(country)
  return {
    props: {
      trails
    }
  }
}


