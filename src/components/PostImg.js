export default function PostImg(props) {
    return (
      <div className="conteudo">
        <img src={props.pImg} data-test="post-image" alt =""/>
      </div>
    );
  }