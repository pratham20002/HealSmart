import React from 'react'
import { Link } from 'react-router-dom'

const Base_page = () => {
  return (
    <div className='wrapper'>
      <div className="text-center mt-5 ">
        <h1 className="display-4" style={{ color: 'white' }}>Welcome</h1>
        <style dangerouslySetInnerHTML={{ __html: "\n        .display-4{\n            text-align: center;\n            line-height: 170px;\n        }\n\n        div.parentElement{\n            text-align: center;\n            display: inline-block;\n            line-height: 250px;\n            \n        }\n        \n        .btn-work {\n        width: 250px;\n        height: 50px;\n        margin: 0 auto;\n        padding: 0;\n        padding-left: 50;\n        display: inline-block;\n   top: 50%;\n     line-height: 50px;\n        text-align: center;\n        background-color: rgba(255, 255, 255, 0.732);\n        }\n    " }} />
        
          <div className="parentElement">
            <Link to="/login"><button className="btn btn-default btn-work">Login</button></Link>
            <Link to="/register"><button className="btn btn-default btn-work" style={{ marginLeft: 30 }}>Register</button></Link>
          </div>
        </div>
      </div>
      )
}

      export default Base_page