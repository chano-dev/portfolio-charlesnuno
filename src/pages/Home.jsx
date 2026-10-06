import Typewriter from '../components/shared/Typewriter'
import { PORTFOLIOS } from '../data/portfolios'
import PortfolioCard from '../components/home/PortfolioCard'

const HOME_TEXTS = [
  'Relaxa, aqui qualquer escolha é a certa.',
  'Relax, any choice here is the right one.',
  'Détends-toi, ici, tout choix est le bon.',
  '放轻松，在这里，怎么选都对。',
]

export default function Home() {
  return (
    <div className="home">
      <header>
        <h1>I'm Charles Nuno.</h1>
        <h2>Welcome to my Portfolios.</h2>
      </header>

      <main>
        <div className="cards-wrapper">
          <p className="cards-label typewriter">
            <Typewriter texts={HOME_TEXTS} textId="text" />
          </p>

          <div className="cards-grid">
            {PORTFOLIOS.map((p) => (
              <PortfolioCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </main>

      <footer>
        <p>2003 - Designed and Developed by Charles Nuno. &copy;</p>
      </footer>
    </div>
  )
}
