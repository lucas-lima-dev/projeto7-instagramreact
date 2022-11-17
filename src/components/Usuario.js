export default function Usuario() {
    let  nome = ""//prompt("Qual é o seu nome?")
    let img = "assets/img/catanacomics.svg" // prompt("Insira a URL de uma imagem:")
    return (
        <div class="usuario" data-test="user">
        <img src={img} data-test="profile-image" />
        <div class="texto">
          <strong>{!nome ? "Lucas" : "cat"}</strong>
          <span data-test="name">
            Catana
            <ion-icon name="pencil" data-test="edit-name"></ion-icon>
          </span>
        </div>
      </div>
    )
}