import CartWidget from "../CartWidget/CartWidget";
import  "./NavBar.scss"


const NavBar = () => {
    
    return (
        <header className="header">

            <a href=""> <img className="nav-img" src="./logo80x80.png" alt="logo"/> </a>
            
            <div className="nav-container">
                
                <CartWidget/>

                <nav className="nav-bar">
                    <a className="nav_link" href="">El Gremio</a>

                    <a className="nav_link" href="">La Taberna</a>

                    <a className="nav_link" href="">El Tablón</a>

                    <a className="nav_link" href="">Reservas</a>

                    <a className="nav_link" href="">Cómo llegar</a>
                </nav>
            </div>
        </header>
    );
}
  
export default NavBar;