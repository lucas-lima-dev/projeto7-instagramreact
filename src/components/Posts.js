import PostHeader from "./PostHeader"
import PostImg from "./PostImg"
import PostFooter from "./PostFooter"

export default function Posts() {
  const post = [
    {userImage: "assets/img/meowed.svg", userName: "meowed", postImg:"assets/img/gato-telefone.svg"},
    {userImage: "assets/img/barked.svg", userName: "barked", postImg:"assets/img/dog.svg"}
  ]

  return (
    <div className="posts">
      {post.map((p) => <Post key={p.userName} uImg = {p.userImage} uName = {p.userName} pImg={p.postImg}/>)}
    </div>
  );
}

function Post(props) {
  return (
    <div className="post" data-test="post">
        <PostHeader uImg = {props.uImg} uName = {props.uName}/>

        <PostImg pImg = {props.pImg}/>

        <PostFooter/>
      </div>
  )
}




