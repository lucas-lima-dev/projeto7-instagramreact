import { useState } from "react";

export default function PostFooter() {
  const [heartColor,setHeartColor] = useState("");
  const [heartIcon,setHeartIcon] = useState("heart-outline")
  
  const [savePost,setSavePost] = useState("bookmark-outline")

  const [likesNumber,setLikesNumber] = useState(101.523)
   
  const changeHeartIcon = () => {
    if(heartColor === "" && heartIcon === "heart-outline") {
        setHeartColor("red")
        setHeartIcon("heart")
        setLikesNumber(likesNumber+1)
    } else {
        setHeartColor("")
        setHeartIcon("heart-outline")
        setLikesNumber(likesNumber-1)
    }
    
  }
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
        <ion-icon
      onClick = {()=>changeHeartIcon()}
      style= {{color: heartColor}}
      name={heartIcon}
      data-test="like-post"
    ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
      <ion-icon onClick = {()=>setSavePost("bookmark")} name={savePost} data-test="save-post"></ion-icon>
    </div>
      </div>

      <div className="curtidas">
        <img src="assets/img/respondeai.svg" alt="" />
        <div className="texto">
          Curtido por <strong>respondeai</strong> e{" "}
          <strong data-test="likes-number">outras {likesNumber} pessoas</strong>
        </div>
      </div>
    </div>
  );
}




