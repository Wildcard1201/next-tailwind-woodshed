export default function HeroComponent() {
    return (
        <div className="bg-[url('/img/hero-lathe.jpeg')] bg-center bg-fill text-white text-shadow text-center py-10">
            <h1 className="text-8xl text-bold">
                Get Stuff Made From Wood
            </h1>
            <h3 className="text-xl">
                It's Real Sturdy
            </h3>
            <button className="bg-blue-200 px-5 py-2 mt-5 rounded-xl text-3xl text-shadow font-bold hover:bg-red-600">
                Order Now
            </button>
        </div>
    )
}
