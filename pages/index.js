

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
      <h1>This is the header</h1>
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