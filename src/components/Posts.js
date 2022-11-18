export default function Posts() {
  const post = [
    {userImage: "assets/img/meowed.svg", userName: "meowed", postImg:"assets/img/gato-telefone.svg"},
    {userImage: "assets/img/barked.svg", userName: "barked", postImg:"assets/img/dog.svg"}
  ]

  return (
    <div class="posts">
      {post.map((p) => <Post uImg = {p.userImage} uName = {p.userName} pImg={p.postImg}/>)}
    </div>
  );
}

function Post(props) {
  return (
    <div class="post" data-test="post">
        <PostHeader uImg = {props.uImg} uName = {props.uName}/>

        <PostImg pImg = {props.pImg}/>

        <PostFooter/>
      </div>
  )
}

function PostHeader(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.uImg} />
        {props.uName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function PostImg(props) {
  return (
    <div class="conteudo">
      <img src={props.pImg} data-test="post-image" />
    </div>
  );
}

function PostFooter() {
  return (
    <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                name="bookmark-outline"
                data-test="save-post"
              ></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong data-test="likes-number">outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
  )
}


