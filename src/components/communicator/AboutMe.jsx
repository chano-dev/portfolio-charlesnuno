import Gallery from './Gallery'
import { ARCHIVES, ARCHIVES_TABS } from '../../data/archives'
import Quotes from './Quotes'

const SKILLS = [
  'Copywriting & Storytelling',
  'Video Editing & Production',
  'Graphic Design & Visual Identity',
  'Content Strategy & Advertising',
]

const CHARLES = [
  ['C', 'Creativity'],
  ['H', 'Humility'],
  ['A', 'Adaptability'],
  ['R', 'Resilience'],
  ['L', 'Leadership'],
  ['E', 'Empathy'],
  ['S', 'Sociability'],
]

export default function AboutMe({ onNavigate, onSelect }) {
  return (
    <>
      <article className="article" id="who-am-i" aria-labelledby="h-who-am-i">
        <h3 className="article__title" id="h-who-am-i">WHO AM I?</h3>
        <p className="article__text">
          Greetings! My name is Charles Nuno and, besides being Angolan, I'm a communicator by training, a creative by nature, a student by passion, and a polyglot by dedication. The images below capture some of the standout moments in my life as a communicator.
        </p>

        <Gallery
          tabs={ARCHIVES_TABS}
          items={ARCHIVES}
          label="Archives"
          onSelect={onSelect}
        />
      </article>

      <article className="article" id="what-i-do" aria-labelledby="h-what-i-do">
        <h3 className="article__title" id="h-what-i-do">WHAT DO I DO?</h3>
        <p className="article__text">
          Whether through words, images, video, sound, or code — verbally or visually — I know how to create impact that stirs emotion or, at the very least, holds people's attention.
        </p>
        <ul className="skills-list" aria-label="Core skills">
          {SKILLS.map((skill) => (
            <li key={skill} className="skills-list__item">{skill}</li>
          ))}
        </ul>
      </article>

      <article className="article" id="why-i-do" aria-labelledby="h-why-i-do">
        <h3 className="article__title" id="h-why-i-do">WHY DO I DO IT?</h3>
        <p className="article__text">
          I believe I was born with one talent and several gifts — what's the difference? I'll only answer that in person. But I do have the talent to create and the gift to communicate (which includes both listening and speaking); and honestly, I don't think it's a coincidence that my name starts with creativity...
        </p>

        <ul className="acrostic" aria-label="CHARLES acronym">
          {CHARLES.map(([letter, word]) => (
            <li key={letter} className="acrostic__item">
              <span className="acrostic__letter" aria-hidden="true">{letter}</span>
              <span className="acrostic__dash" aria-hidden="true">—</span>
              <span className="acrostic__skill">{word}</span>
            </li>
          ))}
        </ul>

        <Quotes />

        <p className="article__text">
          <span>Now that you know a bit more about me, maybe it's time to check out my </span>
          <button type="button" className="inline-link" onClick={() => onNavigate('work')}>
            work
          </button>
          <span>.</span>
        </p>
      </article>
    </>
  )
}