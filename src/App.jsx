import { Header } from './components/Header'
import {Post} from './Post'
import './styles.css'

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Fabiano Santos"
        content="blablablalal"
      />
    </div>
  )
}

export default App
