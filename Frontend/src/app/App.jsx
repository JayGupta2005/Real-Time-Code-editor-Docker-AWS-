import React from 'react'
import './App.css'
import {Editor} from '@monaco-editor/react'
const App = () => {
  return (
    <main className = "h-screen bg-gray-950 flex gap-3 p-2">
      <aside className = "h-full w-1/4 bg-amber-50 rounded-lg"></aside>
      <section className = "h-full w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor height="100%" defaultLanguage="javascript" defaultValue="//Take your first steps toword" theme="vs-dark"/>
      </section>
    </main>
  )
}

export default App
