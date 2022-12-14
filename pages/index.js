

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
    <header>
      <h1>This is the header</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      This is the main part
    </main>
  )
}

function Footer() {
  return (
    <footer>
      This is the footer
    </footer>
  )
}