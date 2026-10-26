
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#212529',
        padding: '15px 0'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '35px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '22px',
            fontWeight: 'bold'
          }}
        >
          Student Portal
        </Link>

        <div style={{ display: 'flex', gap: '30px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>

          <Link to="/students" style={{ color: 'white', textDecoration: 'none' }}>
            Students
          </Link>

          <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>
            Courses
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
