import "../App.css"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
      <div className="bg-error">
        <h1>404</h1>
      </div>
      
        <div className="error">
          <h1>We are sorry , page not found</h1>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>

         <Link to={"/"}><button>Back to home page</button></Link> 
        </div>
      </div>
    </>
  )
}

export default ErrorPage
