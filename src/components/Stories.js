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
    <div class="stories">
      {story.map((s) => <Story pImg = {s.pageImg} uName = {s.userName}/>)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.pImg} />
      </div>
      <div class="usuario">{props.uName}</div>
    </div>
  );
}


