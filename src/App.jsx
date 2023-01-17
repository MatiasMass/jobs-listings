import { useState, useEffect } from 'react'
import db from '../db.json'
import Card from './components/Card'
import './App.css'

function App() {
  console.log(db)
  const [jobs, setJobs] = useState([])
  const [availableSearchTerms, setAvailableSearchTerms] = useState([])
  
  useEffect(() => {
    setJobs(db)
  }, [])
  
  console.log(jobs)

  const handleClick = ({currentTarget}) => {
    const searchItem = currentTarget.innerHTML
    setAvailableSearchTerms([...new Set([...availableSearchTerms, searchItem])])
  }

  const handleDelete = (item) => {
    const indexOf = availableSearchTerms.indexOf(item)
    availableSearchTerms.splice(indexOf, 1 )
    setAvailableSearchTerms([...availableSearchTerms])
  }

  return (
    <div className="App">
      <header>
        <div className="filter">
          {availableSearchTerms.map(item => 
            <div className='item-search' key={item}>
              {item}
              <button className='filter__item__delete' onClick={() => handleDelete(item)}>X</button>
            </div>)}
            <button 
              onClick={()=>{setAvailableSearchTerms([])}} 
              className='filter__item__clear'
            >Clear</button>
        </div>
      </header>
      <main>
        {jobs.filter(job => {
          return availableSearchTerms.every(searchTerm => {
            return searchTerm.toLowerCase()===job.company.toLowerCase() ||             
            searchTerm.toLowerCase()===job.position.toLowerCase() ||
            searchTerm.toLowerCase()===job.role.toLowerCase() ||
            searchTerm.toLowerCase()===job.level.toLowerCase() ||
            job.languages.map(lang => lang.toLowerCase()).includes(searchTerm.toLowerCase()) ||
            job.tools.map(tool => tool.toLowerCase()).includes(searchTerm.toLowerCase())
          })
        }).map(job => {
          return(
            <Card key={job.key} job = {job} onClick={handleClick} />
          )
        })}
      </main>
    </div>
  )
}

export default App
