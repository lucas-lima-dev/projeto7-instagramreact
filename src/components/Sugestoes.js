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
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestao.map((s) => <Sugestao uImg={s.userImg} uName = {s.userName} razao = {s.razao} />)}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.uImg} />
        <div class="texto">
          <div class="nome">{props.uName}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
