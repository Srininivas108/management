import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website:"",

  });
  const { id } = useParams();
  useEffect(() => {
    loadTeacher();
  }, []);
  const loadTeacher = async () => {
    const res = await axios.get(`http://localhost:3002/teachers/${id}`);
    setTeacher(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/teacher">
        back to Teacher Page
      </Link>
      <h1 className="display-4">Teacher Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {teacher.name}</li>
        <li className="list-group-item">Teacher name: {teacher.username}</li>
        <li className="list-group-item">email: {teacher.email}</li>
        <li className="list-group-item">phone: {teacher.phone}</li> 

      </ul>
    </div>
  );
};

export default ViewTeacher;