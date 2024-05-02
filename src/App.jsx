import { Header } from "./components/Header"
import { Post } from "./Post"
import styles from "./App.module.css"

import "./global.css"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post author="Fabiano Santos" content="blablablalal" />
        </main>
      </div>
    </div>
  )
}

export default App
