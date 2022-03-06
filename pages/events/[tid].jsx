import { transcode } from 'buffer'
import { getTrailById, getAllHikes } from '../../data/api-data'

export default function SingleTrail(props) {
  const { trail } = props

  if (!trail) {
    return <div>Loading...</div>
  }

  console.log(trail)

  return (
    <div>
      <h2 className="my-8 text-center text-4xl font-semibold">
        Information about the trail
      </h2>
      {trail.map((trail) => (
        <div className="flex flex-col">
          <div className="mt-8 flex flex-col rounded-lg border dark:border-gray-700 dark:bg-gray-800 leading-8">
            <img className="rounded-md" src={trail.image} alt="" />
            <div className="px-4 py-4">
              <h3 className="my-1 text-3xl font-semibold uppercase">
                {trail.name}{' '}
                <span className="rounded-lg border py-1 px-1 text-sm font-normal text-slate-500 dark:text-slate-400">
                  {trail.difficulty}
                </span>
              </h3>
              <p className="my-1 text-gray-600 dark:text-gray-200">
                Time: {trail.time}
              </p>
              <p className="my-1 text-gray-600 dark:text-gray-200">
                Where: {trail.location}, {trail.country}
              </p>
              <p className="my-1 text-gray-600 dark:text-gray-200">
                Duration: {trail.duration}
              </p>
            </div>
          </div>
          <div className="my-8 text-2xl">
            <p className='font-bold text-3xl mb-3'>
            Additional Information:
            </p>
            <p className='text-normal leading-10'>
              {trail.information ? trail.information : 'No additional information available'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async (context) => {
  const tid = context.params.tid
  const trail = await getTrailById(tid)

  return {
    props: {
      trail,
    },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const trails = await getAllHikes()

  const paths = trails.map((trail) => ({ params: { tid: trail.id } }))

  return {
    paths,
    fallback: false,
  }
}
