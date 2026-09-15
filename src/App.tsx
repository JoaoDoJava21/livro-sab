import { BookExperience } from './components/BookExperience'
import { ExperienceProvider } from './state/ExperienceContext'

export default function App() {
  return (
    <ExperienceProvider>
      <BookExperience />
    </ExperienceProvider>
  )
}
