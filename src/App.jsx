import { useState, useEffect } from 'react'
import db from '../db.json'
import Card from './components/Card'
import './App.css'

function App() {
  console.log(db)
  const [jobs, setJobs] = useState([])
  const [searchItem, setSearchItem] = useState("")
  
  useEffect(() => {
    setJobs(db)
  }, [])
  
  console.log(jobs)

  const handleCLick = () => {
    setSearchItem('')
  }

  return (
    <div className="App">
      <header>
        <div className="filter">
            <input 
              type="text"
              value={searchItem} 
              id="filter__item__jobs" 
              placeholder="Filter by title, companies, expertise..."
              className='filter__item__input'
              onChange={e => setSearchItem(e.target.value)}
            >
            </input>
            <button 
              onClick={() => setSearchItem('')} 
              className='filter__item__clear'
            >Clear</button>
        </div>
      </header>
      <main>
        {jobs.filter((val) => {
          if (searchItem === "") {
            return val
          } else if (val.position.toLowerCase().includes(searchItem.toLowerCase())) {
            return val
          } else if (val.company.toLowerCase().includes(searchItem.toLowerCase())) {
            return val
          } else if (val.role.toLowerCase().includes(searchItem.toLowerCase())) {
            return val
          } else if (val.level.toLowerCase().includes(searchItem.toLowerCase())) {
            return val
          } else if (val.languages.some(language => language.toLowerCase().includes(searchItem.toLowerCase()))) {
            return val
          } else if (val.tools.some(tool => tool.toLowerCase().includes(searchItem.toLowerCase()))) {
            return val
          }
        }).map(job => {
          return(
            <Card key={job.key} job = {job} />
          )
        })}
      </main>
    </div>
  )
}

export default App
