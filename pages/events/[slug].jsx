import { useRouter } from 'next/router'
import { HikeEvents } from '../../data/HikeData'
import { getHikeEvent } from '../../data/HikeData'

export default function SingleTrail() {
  const router = useRouter()
  const { slug } = router.query
  const eventData = getHikeEvent(slug)

  if (!eventData) {
    return <p>Oops! No Event Found.</p>
  }

  const localeDataDate = new Date(eventData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div>
      <h2 className="my-8 text-center text-4xl font-semibold">
        Information about the trail
      </h2>
      {eventData && (
        <>
          <div className="mt-8 flex flex-col border rounded-lg dark:border-gray-700 dark:bg-gray-800">
            <img className="rounded-md" src={eventData.image} alt="" />
            <div className="px-4 py-4">
            <h3 className="text-3xl font-semibold my-1 uppercase">{eventData.name}</h3>
            <p className="text-gray-600 my-1 dark:text-gray-200">{localeDataDate}</p>
            <p className="text-gray-600 my-1 dark:text-gray-200">{eventData.time}</p>
            <p className="text-gray-600 my-1 dark:text-gray-200">{eventData.location}</p>
            <p className="text-gray-600 my-1 dark:text-gray-200">{eventData.description}</p>
            </div>
            
          </div>
          <div className="text-center text-2xl my-8">
            Additional Information:
          </div>
        </>
      )}
    </div>
  )
}
