import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website:"",

  });
  const { id } = useParams();
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const res = await axios.get(`http://localhost:3002/students/${id}`);
    setStudent(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/student">
        back to Student page
      </Link>
      <h1 className="display-4">Student Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {student.name}</li>
        <li className="list-group-item">Student name: {student.username}</li>
        <li className="list-group-item">email: {student.email}</li>
        <li className="list-group-item">phone: {student.phone}</li> 

      </ul>
    </div>
  );
};

export default ViewStudent;