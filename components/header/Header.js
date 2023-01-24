import Logo from './Logo.js'
import NavGroup from './NavGroup'

export default function Header() {
    return (
      <header className="bg-yellow-800 p-1">
        <div className="w-full flex justify-between items-center p-1">
          <Logo />
          <NavGroup />
        </div>
      </header>
    )
  }