import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from './icon2.png';
import phoneicon from './phone.png';

const textLinks = [
  {
    text: "STRONA GŁÓWNA  ",
    href: "/"
  },
  {
    text: "OFERTA  ",
    href: "/projects"
  },
  {
    text: "O NAS",
    href: "/about"
  },
  {
    text: "KONTAKT  ",
    href: "/contact"
  }

];

const useHideOnScroll = () => {
  const prevScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsHidden(isHidden => {
        const scrolledDown = window.scrollY > prevScrollY.current;
        if (scrolledDown && !isHidden) {
          return true;
        } else if (!scrolledDown && isHidden) {
          return false;
        } else {
          prevScrollY.current = window.scrollY;
          return isHidden;
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isHidden;
};

const useCheckTop = () => {
  const [top, setTop] = useState(true);
  const [hideBar, setHideBar] = useState(true);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setTop(top === 0);
    setHideBar(top < 70);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { top, hideBar };
};


export default function Navbar({ dark, cream }){
  const [showMenu, setShowMenu] = useState(false);

  const isHidden = useHideOnScroll();
  const { top, hideBar } = useCheckTop();

  return (
    <nav
      className="navbar"
    >

      {hideBar}
      <div className="container">
        <div className="logoContainer">
          <Link to="/">
            <a className="navbarlogo">
              <img
                src={logo}
                width={85}
                height={85}
              />
            </a>
          </Link>
          <button
            className="hamburger"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Menu"
          >
            <div
              className="hamburgerIcon"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <ul
          className={`linkList ${showMenu? "showMenu" : null}`}
        >

          
          <li key="STRONA GŁÓWNA">
            <Link to={"/"}>
              <a className="link">STRONA GŁÓWNA</a>
            </Link>
          </li>
          <li key="OFERTA">
            <Link to={"/projects"}>
            <div className="lidiv">
              <div className="triangleright"></div>

              <a className="link">OFERTA</a>
              </div>

            </Link>
          </li>
          <li key="O NAS">
            <Link to={"/about"}>
              
              <a className="link">O NAS</a>
              
              
            </Link>
          </li>
          <li key="KONTAKT">
            <Link to={"/contact"}>
              <a className="link">KONTAKT</a>
            </Link>
          </li>
          <div className="phonediv"><a className="cityname" >Warszawa</a><img className='ikonkatel' src={phoneicon}></img>	
<a className='phonetocall' href="tel:797-953-031">797 953 031</a> </div>
        
          <div className="wycena24h">
            <p className="wycena24htext">WYCENA W 24H</p>
          </div>
          
          
        </ul>
      </div>
    </nav>
  );
};