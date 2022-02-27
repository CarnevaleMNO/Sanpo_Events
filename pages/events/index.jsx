import { HikeEvents } from "../../data/HikeData"
import HikeCard from "../../components/cards/HikeCard"

export default function EventsPage() {
    console.log(HikeEvents)
  return (
    <div className="text-center">
      <h2 className="my-10 text-3xl">Here are all upcoming events!</h2>
      {
        HikeEvents.map(event => (
            <HikeCard key={event.id} event={event} />
        ))
      }
    </div>
  )
}
