export default function Sugestoes() {
  const sugestao = [
    {
      userImg: "assets/img/bad.vibes.memes.svg",
      userName: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      userImg: "assets/img/chibirdart.svg",
      userName: "chibirdart",
      razao: "Segue você",
    },
    {
      userImg: "assets/img/razoesparaacreditar.svg",
      userName: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      userImg: "assets/img/adorable_animals.svg",
      userName: "adorable_animals",
      razao: "Segue você",
    },
    {
      userImg: "assets/img/smallcutecats.svg",
      userName: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestao.map((s) => <Sugestao key={s.userName} uImg={s.userImg} uName = {s.userName} razao = {s.razao} />)}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.uImg} alt ="" />
        <div className="texto">
          <div className="nome">{props.uName}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
