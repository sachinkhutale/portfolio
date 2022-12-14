import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import DevopsTools from './DevopsTools'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>My Technical Level</span>
        <div className='skills_container container grid'>
            <Frontend />
            <Backend />
        </div>
        <div className='skills_container container grid'>
            <DevopsTools />
            <Tools />
        </div>
    </section>
  )
}

export default Skills