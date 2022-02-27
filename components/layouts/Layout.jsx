import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-900 dark:text-slate-300">
      <div className="container mx-auto w-3/4 lg:w-1/2 2xl:w-1/3">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
