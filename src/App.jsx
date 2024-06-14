import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar} from './components/Sidebar'

import styles from "./App.module.css"

import "./global.css"

// author: {avatar_url:"", name: "", role: ""}
// publishedAt: Date
//postContent: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fabianolxs.png',
      name: 'Fabiano Xavier',
      role: 'Product Manager'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto🚀'},
    
          '👉{" "} <a href="https://github.com/fabianolxs"> https://github.com/fabianolxs </a>',
               
          '<a href="">#novoprojeto</a>',
          '<a href="">#nlw</a>{" "}',
          '<a href="">#rocketseat</a>{" "}',
        
    ]
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Fabiano Santos" 
          content="blablablalal" />
        </main>
      </div>
    </div>
  )
}

export default App
