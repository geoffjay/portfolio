import React from 'react'
import styles from '../styles/ProjectList.css'
import Project from './Project'

const projects = [
  'project1': { name: 'test-1' },
  'project2': { name: 'test-2' },
  'project3': { name: 'test-3' },
  'project4': { name: 'test-4' },
]

const ProjectList = props => {
  return(
    <div className={styles.projectList}>
      {projects.map((project) => {
        return <Project key={project.name} />
      })}
    </div>
  )
}

export default ProjectList
