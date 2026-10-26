
function Courses() {
  const courses = [
    { id: 1, name: 'Web Development', duration: '3 Months' },
    { id: 2, name: 'Database Management', duration: '2 Months' },
    { id: 3, name: 'Software Engineering', duration: '4 Months' }
  ]

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Our Courses</h1>
      <p>Explore our available courses below.</p>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-3" key={course.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">
                  Duration: {course.duration}
                </p>
                <button className="btn btn-primary">
                  View Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
