import Header from '../components/header/Header'
import HeroComponent from "../components/HeroComponent"
import Card from "../components/Card"

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Main() {
  return (
    <main className="bg-white">
      <HeroComponent />
      <div className="w-full flex justify-evenly py-5">
        <Card />
        <Card />
        <Card />
      </div>
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