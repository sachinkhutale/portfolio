import React from 'react'

const Tools = () => {
  return (
    <div className='skills_content'>
        <h3 className='skills_title'>DevOps Tools</h3>

        <div className='skills_box'>
            <div className='skills_group'>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Git</h3>
                        <span className='skills_level'>Intermediate</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Jenkins</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>
            </div>

            <div className='skills_group'>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Spinnaker</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className='skills_name'>Docker</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools