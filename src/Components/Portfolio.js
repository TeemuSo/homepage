import React, { Component } from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h1>This webpage is under construction. On-going projects, and works to be added.</h1>
        <h1>This webpage is a created based on a {<a href="https://github.com/tbakerx/react-resume-template">template.</a>}.</h1>
      </div>
    </section>
  )
}

// class Portfolio extends Component {
//   render() {

//     if(this.props.data){
//       var projects = this.props.data.projects.map(function(projects){
//         var projectImage = 'images/portfolio/'+projects.image;
//         return <div key={projects.title} className="columns portfolio-item">
//            <div className="item-wrap">
//             <a href={projects.url} title={projects.title}>
//                <img alt={projects.title} src={projectImage} />
//                <div className="overlay">
//                   <div className="portfolio-item-meta">
//                  <h5>{projects.title}</h5>
//                      <p>{projects.category}</p>
//                   </div>
//                 </div>
//               <div className="link-icon"><i className="fa fa-link"></i></div>
//             </a>
//           </div>
//         </div>
//       })
//     }

//     return (
//       <section id="portfolio">

//       <div className="row">

//          <div className="twelve columns collapsed">

//             <h1>Check Out Some of My Works.</h1>

//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//                 {projects}
//             </div>
//           </div>
//       </div>
//    </section>
//     );
//   }
// }

export default Portfolio;
