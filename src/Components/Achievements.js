import React, { useEffect, useState } from 'react';
import Achievement from './Achievement'

const Achievements = props => {
   const [achievements, setAchievements] = useState([])
   // console.log(data)

   useEffect(() => {
      if (props.data) {
         setAchievements(props.data.achievements)
      }
   }, [props.data])

   return (
      <section id="achievements">
         <div className="container">
            <div className="row">

               <div className="columns">
                  <h1>Achievements</h1>
               </div>

               <div className="ten columns flex-container">
                  {achievements !== undefined ? (
                     <ul>
                        {achievements.map(item => (
                           <li key={item.header}>
                              <Achievement
                                 header={item.header} body={item.body} solution={item.solution}
                                 techStack={item.techStack} href={item.href} image={item.image} gif={item.gif}>
                              </Achievement>
                           </li>))}
                     </ul>
                  )
                     : (<div></div>)
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default Achievements;
