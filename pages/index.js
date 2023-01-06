import HeroComponent from "../components/HeroComponent"

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
      <HeroComponent />
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
    <div className="border-2 border-black-400 bg-yellow-900 rounded-full py-2 px-3 text-slate-50 text-lg">The Woodshed</div>
  )
}

function NavGroup() {
  return (
    <div className="border-black-600 bg-blue">
      <ul className="flex">
        <li><NavButton name='Home' value='home'/></li>
        <li><NavButton name='Products' value='products'/></li>
        <li><NavButton name='About (Hover Dropdown)' value='About'/></li>
        <li><NavButton name='FAQ' value='faq'/></li>
        <li><NavButton name='Contact' value='contact'/></li>
        <li><NavButton name='Search' value='search'/></li>
      </ul>
    </div>
  )
}

function NavButton({ name, value }) {
  return (
    <button value={value} className='bg-green-300 p-1.5 ml-1 text-white rounded-md hover:bg-red-400'>
      {name}
    </button>
  )
}