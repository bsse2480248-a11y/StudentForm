import {useParams, Link} from 'react-router-dom'
function StudentProfile(){
    const {id}= useParams()
    return(
     <div className="container mt-5">
        <div className="card">
             <div className="card-body">
                <h1>Student Profile</h1>
                <hr />
                  <p>
                    <strong>Student ID:</strong> {id}
                 </p>
                 <p>
                    <strong>Name:</strong> inshra
                 </p>
                 <p>
                    <strong>program:</strong> software
                 </p>
                 <p>
                    <strong>semester:</strong> 5
                 </p>
                 <p>
                    <strong>Email:</strong> student@example.com
                 </p>

                <link

                 to="/Students" className="btn btn-secondary">back to student</link>
                 </div>
            </div>
     </div>
    )
}
export default StudentProfile