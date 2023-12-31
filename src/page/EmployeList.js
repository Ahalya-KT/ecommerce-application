import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";

function EmployeList() {
  const [employe, setEmploye] = useState([]);

  useEffect(() => {
    axios
      .post("http://training.pixbit.in/api/login", {
        email: "nidhinnp@gmail.com",
        password: "12345678Np",
      })
      .then((user) => {
        console.log(user.data.data.access_token);
        let token = user.data.data.access_token;
        axios
          .get("http://training.pixbit.in/api/employees", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            setEmploye(res.data.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  // useEffect(()=>{
  //     axios.get('http://training.pixbit.in/api/employees',{headers:{"Authorization": 'Bearer ' + "asQ1nRbByT8xTRLoqx6cNtiipiramSDHXdQWEhJ2td9DxEz4MEJnBcQaauuKX9qct2GiQKSC91AUWMDb"}})
  //     .then(res=>{
  //         console.log(res.data.data);
  //         setEmploye(res.data.data.data)
  //     })
  //     .catch(err =>{
  //         console.log(err);
  //     })
  // })

  return (
    <div>
      <Navbar />

      <div className="employee-list">
        <div className="employe-heading">
          <h2>Employees List</h2>
          <button>add New Record</button>
        </div>

        <div className="employee-inputs">
          <input placeholder="Search"></input>
        </div>
      </div>

      <table className="employe-table">
        <tr>
          <th>Sl.No</th>
          <th> First Name</th>
          <th> Last Name</th>
          <th>Join Date</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Designation</th>
        </tr>
        {employe &&
          employe.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.first_name}</td>
              <td>{post.last_name}</td>
              <td>{post.join_date}</td>
              <td>{post.date_of_birth}</td>
              <td>{post.gender}</td>
              <td>{post.designation_id}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default EmployeList;
