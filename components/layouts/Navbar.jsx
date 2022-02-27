import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex h-24 min-h-fit items-center justify-between border-b border-gray-700">
      <Link href="/">
        <h1 className="text-4xl font-semibold cursor-pointer">Sanpo Trails</h1>
      </Link>

      <div className="flex justify-evenly text-xl">
        <div className="mr-4">
          <Link href="/events">All Events</Link>
        </div>
        <div className="">
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  )
}
