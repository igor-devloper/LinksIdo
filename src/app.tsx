import { StarsCanvas } from './components/animation/star-background'
import { Links } from './components/links'
import './index.css'
import { Head } from './components/head'



export function App() {
  return (
    <main className='h-screen flex flex-col items-center bg-gray-900'>
      <StarsCanvas />
      <Head />
      <Links />
    </main>
  )
}

