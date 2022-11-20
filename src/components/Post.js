import { useState } from "react";

export default function PostFooter(props) {
  const [heartColor, setHeartColor] = useState("");
  const [heartIcon, setHeartIcon] = useState("heart-outline");

  const [savePost, setSavePost] = useState("bookmark-outline");

  const [likesNumber, setLikesNumber] = useState(101523);

  const clickHeartIcon = () => {
    if (heartColor === "" && heartIcon === "heart-outline") {
      setHeartColor("red");
      setHeartIcon("heart");
      setLikesNumber(likesNumber + 1);
    } else {
      setHeartColor("");
      setHeartIcon("heart-outline");
      setLikesNumber(likesNumber - 1);
    }
  };

  const clickImgPost = () => {
    if (heartColor === "" && heartIcon === "heart-outline") {
      setHeartColor("red");
      setHeartIcon("heart");
      setLikesNumber(likesNumber + 1);
    } 
  };

  const changeSaveIcon = () => {
    if (savePost === "bookmark-outline") {
      setSavePost("bookmark");
    } else {
      setSavePost("bookmark-outline");
    }
  };


  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.uImg} alt="" />
          {props.uName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img
          onClick={() => clickImgPost()}
          style={{ color: heartColor }}
          name={heartIcon}
          src={props.pImg}
          data-test="post-image"
          alt=""
        />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={() => clickHeartIcon()}
              style={{ color: heartColor }}
              name={heartIcon}
              data-test="like-post"
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() => changeSaveIcon()}
              name={savePost}
              data-test="save-post"
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/img/respondeai.svg" alt="" />
          <div className="texto">
            Curtido por <strong>respondeai</strong> e{" "}
            <strong data-test="likes-number">
              outras {likesNumber} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
