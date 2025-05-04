import React from "react";
import "./Reportagem.css";
import dDay from "../../assets/dday.jpg";

const Reportagem = () => {
  return (
    <div className="container">
      <div className="marginCima"></div>
      <section className="titulo">
        <h1 className="tituloReportagem">
          Desembarque dos Aliados na Normandia.
        </h1>
        <p className="linhaFina">
          Como foi a maior invasão por mar da historia.
        </p>
      </section>
      <hr className="linha"></hr>
      <section className="imagemBase">
        <img className="imagem" src={dDay} />
        <p>
          Desembarque dos Americanos na praia de Omaha em 06 de junho de 1944.
        </p>
      </section>
      <section className="autor">
        <div>
          <p style={{ fontWeight: 700 }}>
            Por <span className="nome">Geziel Ribeiro da Silva Soares</span>
          </p>
          <p>Reportagem de Anápolis GO</p>
          <p className="data">04 de maio de 2025</p>
        </div>
      </section>
      <section className="reportagem">
        <p>
          O desembarque na Normandia, também conhecido como dia D, que foi a
          invasão dos Aliados na praia de Omaha na Normandia que ocorreu na
          terça-feira, 6 de junho de 1944, durante a Segunda Guerra Mundial. Foi
          a maior invasão por mar da história.
        </p>
        <p>
          O planejamento estendia-se desde 1943 e sua execução em 1944. Foi um
          processo complexo que envolveu diversos aspectos, desde a seleção do
          local para o desembarque até a criação de uma estratégia de enganação
          para confundir os alemães.
        </p>
        <p>
          Os Aliados invadiram a Normandia para liberar os territórios que foram
          ocupados pela Alemanha. A Alemanha controlava vários países da Europa,
          incluindo a França.
        </p>
        <p>
          A invasão da Normandia marocu o início da libertação da França do
          domínio da Alemanha, criando um front ocidental de luta contra a
          Alemanha.
        </p>
        <p>
          O dia D é visto por muitos como o fato que definiu o destino da
          Segunda Guerra Mundial, que contribuiu para antecipar a derrota da
          Alemanha e a acabar com a guerra.
        </p>
      </section>
    </div>
  );
};

export default Reportagem;
