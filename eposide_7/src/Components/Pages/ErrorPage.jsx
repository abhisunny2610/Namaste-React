import error from '../Images/error.jpg'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {

  const err = useRouteError()
  
  return (
    <div className="error-page">
        <img src={error} alt="error" />
        <p>We're sorry, the page you are looking for cannot be found. {err.status + err.statusText}</p>
        <Link to='/'>Back To Home</Link>
    </div>
  )
}

export default ErrorPage