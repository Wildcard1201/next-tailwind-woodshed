

export default function Home() {
  return (
    <div className='h-screen border-4 border-red-400 bg-green-400'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
  
}

function Header() {
  return (
    <header className="h-1/6 bg-green-200">
      <div className="flex">
        <Logo />
        <NavGroup />
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className="h-2/3">
      This is the main part
    </main>
  )
}

function Footer() {
  return (
    <footer className="bg-yellow-400 h-full">
      This is the footer
    </footer>
  )
}

function Logo() {
  return (
    <span className="border-2 border-black-400 bg-blue-400 rounded-lg p-2">LOGO HERE</span>
  )
}

function NavGroup() {
  return (
    <div className="w-full border-black-600 bg-blue">
      <ul className="flex ">
        <li><button className="nav-button">Home</button></li>
        <li><button className="nav-button">Products</button></li>
        <li><button className="nav-button">FAQ</button></li>
        <li><button className="nav-button">Contact</button></li>
      </ul>
    </div>
  )
}