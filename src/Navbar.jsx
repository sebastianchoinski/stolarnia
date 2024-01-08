import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import phoneicon from './phoneicon.png'
import logo from './logo.svg'
import "./Navbar.scss"

const textLinks = [
  {
    text: "STRONA GŁÓWNA",
    href: "/"
  },
  {
    text: "PROJEKTY",
    href: "/projects"
  },
  {
    text: "O NAS",
    href: "/about"
  },
  {
    text: "KONTAKT",
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
            <a className="logo">
              <img
                src={logo}
                alt="Mirumee Software"
                width={140}
                height={36}
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
          {textLinks.map(textLink => (
            <li key={textLink.text}>
              <Link to={textLink.href}>
                <a className="link">{textLink.text}</a>
              </Link>
            </li>
          ))}
          <li>
            <div className="phonediv"><img src={phoneicon}></img><p>+48 XXX XXX XXX</p></div>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};