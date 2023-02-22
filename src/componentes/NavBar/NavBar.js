import  "./NavBar.scss"


const NavBar = () => {
    
    return (
        <header>
            <div className="nav-container">

                <a href=""> <img className="nav-img" src="./logo80x80.png" alt="logo"/> </a>
               
                <nav className="nav-bar">
                    <a className="nav-link" href="">El Gremio</a>

                    <a className="nav-link" href="">La Taberna</a>

                    <a className="nav-link" href="">El Tablón</a>

                    <a className="nav-link" href="">Reservas</a>

                    <a className="nav-link" href="">Cómo llegar</a>
                </nav>
            </div>
        </header>
    );
}
  
export default NavBar;