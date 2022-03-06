import HikeCard from '../../components/cards/HikeCard'

export default function EventsPage(props) {
  const { trails } = props
  const result = Object.keys(trails).map(key => { return trails[key] })

  return (
    <div className="text-center">
      <h2 className="my-10 text-3xl">Here are all upcoming events!</h2>
      {result.map((trail) => (
        <HikeCard key={trail.id} trail={trail} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const trails = await fetch(
    'https://sanpo-trails-default-rtdb.firebaseio.com/trails.json'
  ).then((res) => res.json())

  return {
    props: {
      trails,
    },
    revalidate: 3600,
  }
}
