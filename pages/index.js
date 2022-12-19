

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
    <span className="border-2 border-black-400">LOGO HERE</span>
  )
}

function NavGroup() {
  return (
    <ul className="flex">
      <li><button className="custom-button">Home</button></li>
      <li><button>Products</button></li>
      <li><button>FAQ</button></li>
      <li><button>Contact</button></li>
    </ul>
  )
}