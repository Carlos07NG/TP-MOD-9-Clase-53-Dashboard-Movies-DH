import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center h-100">
      <h2>
      ¿ESTAS PERDIDO?
      </h2>
      <Link to={"/"}>Volver al inicio</Link>
    
    </div>
  )
}

export default NotFound
