import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/fabianolxs.png"
          />
          <div className={styles.authorInfo}>
            <strong>Fabiano Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="05 de Maio às 19h00" dateTime="2024-05-05 19:00:05">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW return, evento da Rocketseat. O nome do projeto🚀
        </p>
        <p>
          👉{" "}
          <a href="https://github.com/fabianolxs">
            https://github.com/fabianolxs
          </a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>

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