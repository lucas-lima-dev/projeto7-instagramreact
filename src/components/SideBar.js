import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
   const user = [{userImage: "assets/img/catanacomics.svg", userName: "Catana", pageName:"catanacomics"}]
    
  return (
    <div className="sidebar">
      {user.map((u) => <Usuario key={u.userName} uName = {u.userName} uImg = {u.userImage} pName = {u.pageName}/>)}

      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
