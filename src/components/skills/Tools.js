import React from 'react'

const Tools = () => {
  return (
    <div className='skills_content'>
        <h3 className='skills_title'>Tools</h3>

        <div className='skills_box'>
            <div className='skills_group'>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Jira</h3>
                        <span className='skills_level'>Intermediate</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Solr</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>
            </div>

            <div className='skills_group'>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Wiki</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Figma</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools