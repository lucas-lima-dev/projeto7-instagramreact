export default function PostHeader(props) {
    return (
      <div className="topo">
        <div className="usuario">
          <img src={props.uImg} alt ="" />
          {props.uName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
    );
  }