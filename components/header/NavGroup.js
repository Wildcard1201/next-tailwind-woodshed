import NavButton from './NavButton'

export default function NavGroup() {
    return (
      <div>
        <ul className="flex">
          <li><NavButton name='Home' value='home'/></li>
          <li><NavButton name='Products' value='products'/></li>
          <li><NavButton name='About (Hover Dropdown)' value='About'/></li>
          <li><NavButton name='FAQ' value='faq'/></li>
          <li><NavButton name='Contact' value='contact'/></li>
          <li><NavButton name='Search' value='search'/></li>
        </ul>
      </div>
    )
  }