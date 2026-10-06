import { useState } from 'react'
import AboutMe from '../components/communicator/AboutMe'
import Work from '../components/communicator/Work'
import Contacts from '../components/communicator/Contacts'
import { SECTIONS } from '../data/communicatorSections'
import PortfolioLayout from '../layouts/PortfolioLayout'

export default function Communicator() {
  const [activeSection, setActiveSection] = useState('about-me')

  return (
    <PortfolioLayout
      portfolio="communication"
      homePath="/co"
      iconClass="icon-communication"
      titleKey="nav.title"
      sections={SECTIONS}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      renderSection={(s, ctx) => {
        if (s.id === 'about-me') return <AboutMe onNavigate={ctx.setActiveSection} onSelect={ctx.setSelectedItem} />
        if (s.id === 'work') return <Work onNavigate={ctx.setActiveSection} onSelect={ctx.setSelectedItem} />
        if (s.id === 'contacts') return <Contacts />
        return null
      }}
    />
  )
}
