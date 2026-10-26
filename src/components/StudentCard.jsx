
import { useState } from 'react'
import { Link } from 'react-router-dom'

function StudentCard({ id, name, program, semester }) {

  const [views, setViews] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  function handleViews() {
    setViews(views + 1)
  }

  return (
    <div className="card shadow-sm h-100">

      <div className="card-body">

        <h2 className="card-title">{name}</h2>

        <p className="card-text">{program}</p>

        <p className="card-text">
          Semester {semester}
        </p>

        <p className="card-text">
          Profile Views: {views}
        </p>

        <button
          className="btn btn-primary me-2"
          onClick={handleViews}
        >
          View Profile
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="mt-3">
            <p>
              <strong>Email:</strong> student@example.com
            </p>

            <p>
              <strong>Phone:</strong> 0300-234567
            </p>
          </div>
        )}

        <div className="mt-3">
          <Link
            to={`/students/${id}`}
            className="btn btn-outline-primary"
          >
            Open Student Profile
          </Link>
        </div>

      </div>
    </div>
  )
}

export default StudentCard