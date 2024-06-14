import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>Fabiano Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="05 de Maio às 19h00" dateTime="2024-05-05 19:00:05">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
