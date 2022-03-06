import { useRef } from "react"

export default function Search(props) {
  const searchRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedLocation = searchRef.current.value
    console.log('Searching for: ', selectedLocation)

    props.onSearch(selectedLocation)
  }


  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div className="my-4">
        <label htmlFor="country">Country:</label>
        <select ref={searchRef} className='border px-1 py-1 mx-1 rounded-md dark:text-slate-600' name="country" id="country">
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
        </select>
        </div>
        <button className='cursor-pointer border border-slate-300 py-2 px-2 rounded-md hover:bg-slate-300 hover:text-black text-center w-full'>
          Search Events
        </button>
      </form>
    </div>
  )
}
