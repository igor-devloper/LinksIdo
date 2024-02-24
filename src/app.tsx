import { StarsCanvas } from './components/animation/star-background'
import { Links } from './components/links'
import './index.css'
import { Head } from './components/head'
import { Footer } from './components/footer'



export function App() {
  return (
    <main className='h-screen flex flex-col items-center bg-gray-950'>
      <StarsCanvas />
      <Head />
      <Links />
      <Footer/>
    </main>
  )
}

