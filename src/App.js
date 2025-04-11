// --- декларативный стиль
import { useState, createElement } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentYear from './components/current-year.module.js'
// ----------------------

// --- императивный стиль
function App() {
  const [count, setCount] = useState(0)

  return createElement(
    'div',
    {},
    createElement(
      'div',
      {},
      createElement('a', {href: "https://vite.dev", target: "_blank"},
        createElement('img', {src: viteLogo, className: "logo", alt: "Vite logo"})
      ),
      createElement('a', {href: "https://react.dev", target: "_blank"},
        createElement('img', {src: reactLogo, className: "logo react", alt: "React logo"})
      ),
      createElement(CurrentYear)
    ),
    createElement('h1', {}, 'Vite + React'),
    createElement(
      'div',
      {className: "card"},
      createElement(
        'button',
        {onClick: () => setCount((count) => count + 1)},
        'count is ',
        count
      ),
      createElement(
        'p',
        {},
        'Edit ', createElement('code', {}, 'src/App.jsx'), ' and save to test HMR'
      )
    ),
    createElement(
      'p',
      {className: "read-the-docs"},
      'Click on the Vite and React logos to learn more'
    )
  )
}

export default App
// ----------------------