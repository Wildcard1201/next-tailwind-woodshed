import HeroComponent from "./HeroComponent"
import Card from "./Card"

export default function Main() {
    return (
      <main className="bg-white">
        <HeroComponent />
        <h2 className="text-6xl text-bold text-center my-10">
          Popular Items
        </h2>
        <div className="w-full flex justify-evenly py-5">
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    )
  }