import React from 'react'
import Stars from '../components/Stars'
import PositionItem from '../components/experience/PositionItem.jsx'
import SkillItem from '../components/experience/SkillItem'
import CourseItem from '../components/experience/CourseItem'
import SecondPic from '../assets/secondLect.jpeg'

function Experience({skills}) {

  const skillsArray = ["Python", "Java", "HTML5", "CSS", "JavaScript", "C++", "TensorFlow","PyTorch", "React.js", "Node.js", "MongoDB", "Distributed Systems"]
  const coursesArray = ["EECS 485: Web Systems","EECS 445: Introduction to Machine Learning", "EECS 376: Foundations of Computer Science", "EECS 281: Data Structures and Algorithms", "EECS 280: Programming and Data Structure", "EECS 203: Discrete Mathematics", "MATH 214: Applied Linear Algebra", "COGSCI 200: Introduction to Cognitive Science"]

  return (
    <div className='experiencePage pointer-events-none'>
        <Stars />
        <div className='projectsHeader'>
          <h1 className='text-good-blue relative font-bold text-3xl ml-2 mt-2'>Experience</h1>
        </div>
        <div className='rounded-lg mt-2 card bg-base-100 pointer-events-auto experienceHeader'>
          <div className='card-body'>
            <h2 className='text-3xl mt-0 font-bold'>
              Positions
            </h2>
            <div className='picGrid'>
              <img src={SecondPic} alt='lecture2' className='experiencePic relative rounded-3xl m-auto mt-3'/>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2'>

              <PositionItem 
              position="Software Development Engineer Intern" 
              employer="Amazon Web Services " 
              time="May 2023 - August 2023" 
              description="- Engineered full-stack SDK applications to aid the development of pricing models.
              - Designed and Implemented Document Comparison software to reduce memory and compute resources by a factor of 10.
              - Presented technical implementation of Document Comparison software to over 50 Senior Engineers."
              />


              <PositionItem 
              position="Student Marketeer" 
              employer="Red Bull" 
              time="Feb 2022 - October 2022" 
              description="-Directs product trial to consumers and customers
              - Helps establish Red Bull consumption on diverse occasions
              - Supporting sales team by ensuring brand experience for consumers at Red Bull events."
              />

              <PositionItem 
              position="President" 
              employer="OpenMI at the University of Michigan" 
              time="Oct 2021 - Present" 
              description="Designed curriculum to educate club members on Machine Learning as well as give practical experience in designing and implementing ML models."
              />

              <PositionItem 
              position="Service Digitization Intern" 
              employer="KeyBank" 
              time="June 2022 - October 2022" 
              description="Developed bots to automate Mortgage and Loan Servicing processes. Deployed programs that processed $10 million+ in mortgage and loan information each day."
              />

              <PositionItem 
              position="Research Assistant" 
              employer="University of Michigan" 
              time="Sep 2021 - Present" 
              description="-Worked with Dr. Jonides to construct experiments studying attention using Psychopy
              -Aided in Data Collection and Analysis from Human Subject Testing
              -Collaborated with fellow Laboratory Personnel to Follow the most Optimal Research Procedure"
              />

              <PositionItem 
              position="Project Manager" 
              employer="Reach Consulting Group" 
              time="Sep 2021 - Present" 
              description="-Wrote Python scripts to analyze client's data
              -Utilized GIS tools to form a comprehensive user dashboard
              -Actively communicated with the client on project goals
              
              -Created VR Game using Unity3D for Fintech Startup
              -Worked with Figma to framework and wireframe UI of Game components
              -Conducted playtesting to ensure a positive user experience"
              />

              <PositionItem 
              position="Software Consultant" 
              employer="Midwest Bone and Joint Surgery" 
              time="May 2021 - Sep 2021" 
              description="-Created a separate database to track patient interactions using relational database management.
              -Created a reporting dashboard for medical office use."
              />

              <PositionItem 
              position="Course Instructor" 
              employer="iD Tech Camps" 
              time="May 2021 - Sep 2021" 
              description="-Taught campers aged 12 - 17 basic computer programming in C++ and Python
              -Provided instruction in Python machine learning and game development.
              -Coordinated with other Instructors and Managers to modify elements of the curriculum"
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 bottomExpCards'>
          <div className='rounded-lg mt-2 card bg-base-100 skills skillsCoursework'>
            <div className='card-body'>
              <h3 className='text-xl mt-0 font-bold'>
                Skills
              </h3>
              <div className='grid grid-cols-3'>
              {skillsArray.map((skill) => (
                    <SkillItem name={skill} />
                ))} 
              </div>
            </div>
          </div>
          <div className='rounded-lg mt-2 card bg-base-100 pointer-events-auto skillsCoursework'>
            <div className='card-body'>
              <h3 className='text-xl mt-0 font-bold overflow-auto'>
                Coursework
              </h3>
              <div className='courseCard overflow-auto'>
                {coursesArray.map((course) => (
                    <CourseItem title={course} />
                ))} 
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience