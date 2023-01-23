import Button from '../misc/Button'

export default function HeroComponent() {
    return (
        <div className="bg-[url('/img/hero-lathe.jpeg')] bg-center bg-fill text-white text-shadow text-center py-32">
            <h1 className="text-8xl text-bold">
                Get Stuff Made From Wood
            </h1>
            <h3 className="text-xl">
                It's Real Sturdy
            </h3>
            <Button name='Order Now!'/>
        </div>
    )
}
