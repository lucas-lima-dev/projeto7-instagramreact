export default function Stories() {
  const story = [
    { pageImg: "assets/img/9gag.svg", userName: "9gag" },
    { pageImg: "assets/img/meowed.svg", userName: "meowed" },
    { pageImg: "assets/img/barked.svg", userName: "barked" },
    {
      pageImg: "assets/img/nathanwpylestrangeplanet.svg",
      userName: "nathanwpylestrangeplanet",
    },
    { pageImg: "assets/img/wawawicomics.svg", userName: "wawawicomics" },
    { pageImg: "assets/img/respondeai.svg", userName: "respondeai" },
    { pageImg: "assets/img/filomoderna.svg", userName: "filomoderna" },
    { pageImg: "assets/img/memeriagourmet.svg", userName: "memeriagourmet" },
  ];

  return (
    <div className="stories">
      {story.map((s) => <Story key={s.userName} pImg = {s.pageImg} uName = {s.userName}/>)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.pImg} alt =""/>
      </div>
      <div className="usuario">{props.uName}</div>
    </div>
  );
}


