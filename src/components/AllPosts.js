import Post from "./Post"

export default function AllPosts() {
  const post = [
    {userImage: "assets/img/meowed.svg", userName: "meowed", postImg:"assets/img/gato-telefone.svg"},
    {userImage: "assets/img/barked.svg", userName: "barked", postImg:"assets/img/dog.svg"}
  ]

  return (
    <div className="posts">
      {post.map((p) => <Posts key={p.userName} uImg = {p.userImage} uName = {p.userName} pImg={p.postImg}/>)}
    </div>
  );
}

function Posts(props) {
  return (
    // <div className="post" data-test="post">
    //     <PostHeader uImg = {props.uImg} uName = {props.uName}/>

    //     <PostImg pImg = {props.pImg}/>

    //     <PostFooter/>
    //   </div>
    <Post uImg = {props.uImg} uName = {props.uName} pImg = {props.pImg}/>
  )
}




