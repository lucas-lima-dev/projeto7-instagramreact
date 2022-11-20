import AllPosts from "./AllPosts";
import SideBar from "./SideBar";
import Stories from "./Stories";


export default function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />

        <AllPosts />
      </div>
      <SideBar />
    </div>
  );
}
