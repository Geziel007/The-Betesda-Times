import React from "react";
import Titulo from "../../assets/nytimes.png";
import Logo from "../../assets/logony.png";
import "./Drawer.css";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Reportagem from "../reportagem/Reportagem";
import Footer from "../footer/Footer";

const Drawer = () => {
  const pages = [
    { pagina: "Mundo" },
    { pagina: "EUA" },
    { pagina: "América latina" },
    { pagina: "Tempo e clima" },
    { pagina: "Negócios" },
    { pagina: " Ciência" },
    { pagina: "Cultura" },
    { pagina: "Estilos de vida" },
    { pagina: "Opinião" },
    { pagina: "Esportes" },
    { pagina: "Bem" },
  ];

  return (
    <div>
      <header className="headerContainer">
        <div className="headerTop">
          <div className="flex">
            <div className="iconesEsquerda">
              <DehazeIcon style={{ fontSize: 18, cursor: "pointer" }} />
              <div className="lupa">
                <SearchIcon style={{ fontSize: 18, cursor: "pointer" }} />
              </div>
              <label className="labelBold" style={{ fontSize: 15 }}>
                EUROPA
              </label>
            </div>
            {/* <img className="Titulo" src={Titulo} /> */}
            <label className="Titulo">The Betesda Times</label>
            <div className="divEspaco"></div>
          </div>
        </div>
        <div className="headerBottom">
          <div className="logoContainer">
            {/* <img className="logo" src={Logo} /> */}
            <label className="logo">T</label>
          </div>
          <div className="paginas">
            <div>
              <label className="labelBold">
                Betesda Times in Spanish{" "}
                <KeyboardArrowRightIcon style={{ fontSize: 15 }} />
              </label>{" "}
              <div className="labelBoldMedia">
                <label>A New York </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Times in Spanish{" "}
                  <KeyboardArrowRightIcon style={{ fontSize: 15 }} />
                </label>
              </div>{" "}
            </div>
            <div className="linhaVertical"></div>
            {pages.map((item) => (
              <label className="tituloPaginas">{item.pagina}</label>
            ))}
          </div>
          <div className="divEspaco"></div>
        </div>
      </header>
      <Reportagem />
      <Footer />
    </div>
  );
};

export default Drawer;
