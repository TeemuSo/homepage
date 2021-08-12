import React, { useEffect, useState } from 'react';
import Award from './Award'

const Awards = props => {
   const [awards, setAwards] = useState()
   // console.log(data)

   useEffect(() => {
      if (props.data) {
         setAwards(props.data.awards)
      }
   },[props.data])

   return (
      <section id="awards">
         <div className="container">
            <div className="row">

               <div className="two columns header-col">
                  <h1><span>Awards</span></h1>
               </div>

               <div className="ten columns flex-container">
                  {awards !== undefined ? (
                     <ul>
                        <Award header={awards[0].header} body={awards[0].body}></Award>
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

export default Awards;
