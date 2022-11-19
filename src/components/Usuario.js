import { useState } from "react"

export default function Usuario() {
    let img = "assets/img/catanacomics.svg"
    const [nome,setNome] = useState("Catana") 
    const [imagem,setImagem] = useState(img)

     // 
    return (
        <div className="usuario" data-test="user">
        <img onClick = {()=>setImagem(prompt("Insira a URL de uma imagem:"))}src={!imagem ? img : imagem} data-test="profile-image" alt ="" />
        <div className="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {!nome ? "Sem nome" : nome}
            <ion-icon onClick = {()=>setNome(prompt("Qual é o seu nome?"))} name="pencil" data-test="edit-name"></ion-icon>
          </span>
        </div>
      </div>
    )
}