import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Teacher=()=>{
    const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    const result = await axios.get("http://localhost:3002/teachers");
    setTeacher(result.data.reverse());
  };
  const deleteTeacher = async id => {
    await axios.delete(`http://localhost:3002/teachers/${id}`);
    loadTeachers();
  };


    return(
      <div className="container">
         <div className='py-4'>
         <h1>Teacher Page</h1>
         <Link className="btn btn-outline-primary mr-2" to="/teachers/add">
                    ADD Teacher
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
            {teachers.map((teacher, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{teacher.name}</td>
                <td>{teacher.username}</td>
                <td>{teacher.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" exact to={`/teachers/${teacher.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                   exact to={`/teachers/edit/${teacher.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteTeacher(teacher.id)}
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
export default Teacher;