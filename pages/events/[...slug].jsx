import { useRouter } from 'next/router'
import {getQueriedHikeEvents} from '../../data/HikeData'
import HikeCard from '../../components/cards/HikeCard'

export default function FilteredTrails() {
  const router = useRouter()
  const { slug } = router.query
  

  if(!slug) {
    return <p>Oops! Something went wrong. Please try again</p>
  }

  const query = slug[1]

  
  const queriedHikeEvents = getQueriedHikeEvents(query)

  if (queriedHikeEvents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-8 text-5xl font-semibold">
          No Hikes Found
        </h2>
      </div>
    )
  }
  

  return (
    <div>
      {queriedHikeEvents.map((event) => (
        <HikeCard event={event} key={event.id} />
      ))}
    </div>
  )
}
