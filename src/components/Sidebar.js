import React from 'react'
import data from '../data.json'
import "../style/style.css"

const Sidebar = () => {
//  console.log(data);

 let Sizes = [...new Set (data.products.reduce((acc, cv) => {
   acc= acc.concat(cv.availableSizes)
   return acc
 }, []))
];
// console.log(Sizes);

              return (
          <div className="container">
            <h3>Sizes:</h3>
          <aside>
        
            {Sizes.map(Size => {
            return  <button className="sidebar_btn">{Size}</button>
            })}
       
        <p>Leave a star on Github if this repository was useful :)</p>
        <button>Star</button><button>1100</button>

      </aside>
    </div>
  )
}

export default Sidebar