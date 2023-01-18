import Logo from './Logo.js'
import NavGroup from './NavGroup'

export default function Header() {
    return (
      <header className="bg-green-200 p-1">
        <div className="w-full flex justify-between items-center bg-red-100 p-1">
          <Logo />
          <NavGroup />
        </div>
      </header>
    )
  }