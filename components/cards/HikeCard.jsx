import Link from 'next/link'

export default function HikeCard({ trail }) {
  return (
    <div className="my-8 flex justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg border bg-white shadow-md  dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src={`${trail.image}`}
            alt={`${trail.name}`}
          />
          <div className="flex flex-col justify-between p-4 leading-normal md:w-60">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {trail.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
             {trail.location}, {trail.country}
            </p>
            <Link href={"/" + `events/${trail.id}`}>
                <p className='cursor-pointer border border-slate-300 py-2 px-2 rounded-md hover:bg-slate-300 hover:text-black text-center'>Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
