import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student=()=>{
    const [students, setStudent] = useState([]);

  useEffect(() => {
   loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:3002/students");
    setStudent(result.data.reverse());
  };
  const deleteStudent = async id => {
    await axios.delete(`http://localhost:3002/students/${id}`);
  loadStudents();
  };


    return(
      <div className="container">
         <div className='py-4'>
         <h1>Student Page</h1>
         <Link className="btn btn-outline-primary mr-2" to="/students/add">
                    ADD Student
                  </Link>
         
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" exact to={`/students/${student.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                   exact to={`/students/edit/${student.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteStudent(student.id)}
                    >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>




         </div>
          

      </div>



    )
} 
export default Student;