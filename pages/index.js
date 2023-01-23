import Header from '../components/header/Header'
import Main from '../components/main/Main'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}



function Footer() {
  return (
    <footer className="bg-yellow-100">
      This is the footer
    </footer>
  )
}