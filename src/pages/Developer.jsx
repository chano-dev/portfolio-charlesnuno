import { useState } from 'react'
import AboutMeDeveloper from '../components/developer/AboutMe'
import ProjectsDeveloper from '../components/developer/Projects'
import Contacts from '../components/communicator/Contacts'
import { DEVELOPER_SECTIONS } from '../data/developerSections'
import PortfolioLayout from '../layouts/PortfolioLayout'

export default function Developer() {
  const [activeSection, setActiveSection] = useState('about-me')

  return (
    <PortfolioLayout
      portfolio="programming"
      homePath="/pr"
      iconClass="icon-programming"
      titleKey="pr.nav.title"
      sections={DEVELOPER_SECTIONS}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      renderSection={(s, ctx) => {
        if (s.id === 'about-me') return <AboutMeDeveloper onNavigate={ctx.setActiveSection} onSelect={ctx.setSelectedItem} />
        if (s.id === 'projects') return <ProjectsDeveloper onNavigate={ctx.setActiveSection} onSelect={ctx.setSelectedItem} />
        if (s.id === 'contacts') return <Contacts />
        return null
      }}
    />
  )
}
