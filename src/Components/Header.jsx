import {Link} from 'react-router-dom'
import LoginButton from './LoginButton';

function Header() {
  const headerStyle = {
    padding:'10px', 
    background: 'rgb(36, 65, 100)',
    display: 'flex',
    alignItems: 'center'
  };
    const linkStyle = {
        margin: '20px',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
      };
    return (
      <div style={headerStyle}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img
          style={{ width: '154px', height: '20px' }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
    <Link to="/movies" style={linkStyle}>영화</Link>
    <Link to="/tv" style={linkStyle}>TV 프로그램</Link>
    <Link to="/celebrity" style={linkStyle}>인물</Link>
    <LoginButton />
      </div>
    )
  }
  
  export default Header