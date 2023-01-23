import HeroComponent from "./HeroComponent"
import Card from "./Card"

export default function Main() {
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