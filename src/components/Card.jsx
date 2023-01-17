import React from 'react'
import './Card.css'

function Card({job, onClick}) {
  return (
    <div className='card'>
        <div className="logo">
            {console.log(job.logo)}
            <img src={job.logo} alt={job.company} />
        </div>
        <div className="content">
            <div className="top">
                <h2 onClick={onClick}>{job.company}</h2>
                {job.new && <span className="new">New!</span>}
                {job.featured && <span className="featured">Featured</span>}
            </div>
            <div className="middle">
                <div className="left">
                    <span className='role' onClick={onClick}>{job.role}</span>
                    <span className='level' onClick={onClick}>{job.level}</span>
                </div>
                <div className="right">
                    {job.languages.map(language => {
                        return(
                            <span onClick={onClick}>{language}</span>
                        )
                    })}
                    {job.tools.map(tool => {
                        return(
                            <span onClick={onClick}>{tool}</span>
                        )
                    })}
                </div>
            </div>
            <div className="bottom">
                <span>{job.postedAt}</span>
                ⚫︎
                <span>{job.contract}</span>
                ⚫︎
                <span>{job.location}</span>
            </div>
        </div>
    </div>
  )
}

export default Card