const NavBar = () => {
    
    return (
      <div>
        <header>
            <div>
                <a href="#"> <img className="nav-img" src="./logo80x80.png" alt="logo"/> </a>
                <nav className="">
                    <ul className="">
                        <li className="">
                            <a className="" href="index.html">El Gremio</a>
                        </li>
                        <li className="">
                            <a className="" href="paginas/carta.html">La Taberna</a>
                        </li>
                        <li className="">
                            <a className="" href="paginas/juegos.html">El Tablón</a>
                        </li>
                        <li className="">
                            <a className="" href="paginas/reservas.html">Reservas</a>
                        </li>
                        <li className="">
                            <a className="" href="paginas/comollego.html">Cómo llegar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
        
      </div>
    );
}
  
export default NavBar;