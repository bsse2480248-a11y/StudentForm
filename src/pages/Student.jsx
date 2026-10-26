
import StudentCard from '../components/StudentCard'

function Student() {

  return (

    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h1>Students</h1>

        <button className="btn btn-primary">
          Add New Student
        </button>

      </div>

      <div className="row">

        <div className="col-md-6 col-lg-3 mb-4">

          <StudentCard
            id={101}
            name="inshra"
            program="BSSE"
            semester={5}
          />

        </div>

        <div className="col-md-6 col-lg-3 mb-4">

          <StudentCard
            id={102}
            name="maryam"
            program="BSSE"
            semester={5}
          />

        </div>

        <div className="col-md-6 col-lg-3 mb-4">

          <StudentCard
            id={103}
            name="rachna"
            program="BSSE"
            semester={5}
          />

        </div>

        <div className="col-md-6 col-lg-3 mb-4">

          <StudentCard
            id={104}
            name="zahra"
            program="BSSE"
            semester={5}
          />

        </div>

      </div>

    </div>

  )
}

export default Student
