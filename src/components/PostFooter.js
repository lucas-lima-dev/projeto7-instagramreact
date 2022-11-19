import { useState } from "react";

export default function PostFooter() {
  const [heartColor,setHeartColor] = useState("");
  
  const [savePost,setSavePost] = useState("bookmark-outline")
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
        <ion-icon
      onClick = {()=>setHeartColor("red")}
      style= {{color: heartColor}}
      name="heart-outline"
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
          <strong data-test="likes-number">outras 101.523 pessoas</strong>
        </div>
      </div>
    </div>
  );
}



