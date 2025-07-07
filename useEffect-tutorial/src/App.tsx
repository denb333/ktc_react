import React, { useState } from 'react'
import './App.css'
import BasicUseEffect from './components/BasicUseEffect'
import UseEffectWithDependencies from './components/UseEffectWithDependencies'
import UseEffectCleanup from './components/UseEffectCleanup'
import UseEffectAsync from './components/UseEffectAsync'
import UseEffectMultiple from './components/UseEffectMultiple'

function App() {
  const [currentExample, setCurrentExample] = useState<string>('basic')

  const examples = [
    { id: 'basic', name: 'Basic useEffect', component: <BasicUseEffect /> },
    { id: 'dependencies', name: 'useEffect với Dependencies', component: <UseEffectWithDependencies /> },
    { id: 'cleanup', name: 'useEffect với Cleanup', component: <UseEffectCleanup /> },
    { id: 'async', name: 'useEffect với Async', component: <UseEffectAsync /> },
    { id: 'multiple', name: 'Multiple useEffect', component: <UseEffectMultiple /> }
  ]

  return (
    <div className="app">
      <h1>🎯 useEffect Tutorial trong TypeScript React</h1>
      
      <div className="navigation">
        {examples.map(example => (
          <button
            key={example.id}
            onClick={() => setCurrentExample(example.id)}
            className={currentExample === example.id ? 'active' : ''}
          >
            {example.name}
          </button>
        ))}
      </div>

      <div className="example-container">
        {examples.find(ex => ex.id === currentExample)?.component}
      </div>
    </div>
  )
}

export default App 