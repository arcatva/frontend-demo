import './Navbar.css'

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'contact', label: '联系' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
          DemoApp
        </div>
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={currentPage === item.id ? 'active' : ''}
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
