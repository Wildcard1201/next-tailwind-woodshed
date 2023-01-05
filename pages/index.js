

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-green-200 p-1">
      <div className="w-full flex justify-between items-center bg-red-100 p-1">
        <Logo />
        <NavGroup />
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className="bg-green-100">
      This is the main part
    </main>
  )
}

function Footer() {
  return (
    <footer className="bg-yellow-100">
      This is the footer
    </footer>
  )
}

function Logo() {
  return (
    <div className="border-2 border-black-400 bg-yellow-900 rounded-xl py-2 px-3 text-slate-50 text-lg">The Woodshed</div>
  )
}

function NavGroup() {
  return (
    <div className="border-black-600 bg-blue">
      <ul className="flex">
        <li><button className="nav-button">Home</button></li>
        <li><button className="nav-button">Products (Hover Dropdown)</button></li>
        <li><button className="nav-button">About (Hover Dropdown)</button></li>
        <li><button className="nav-button">FAQ</button></li>
        <li><button className="nav-button">Contact</button></li>
        <li><button className="nav-button">(Search)</button></li>
        <li><NavButton name='New Button' value='55'/></li>
      </ul>
    </div>
  )
}

function NavButton({ name, value }) {
  return (
    <button value={value} className='bg-green-300 p-1.5 text-white rounded-md'>
      {name}
    </button>
  )
}