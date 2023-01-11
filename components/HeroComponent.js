import Image from 'next/image'

export default function HeroComponent() {
    return (
        <div className="bg-[url('/img/hero-lathe.jpeg')]">
            This is the Hero Component
            <Image src="/img/hero-lathe.jpeg" alt="lathe image" width="128" height="100" />
        </div>
    )
}
