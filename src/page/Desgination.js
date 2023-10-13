import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { Edit, Trash2 } from "react-feather";

function Desgination() {
  const [name, setname] = useState([]);

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
          .get("http://training.pixbit.in/api/designations", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            setname(res.data.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  // useEffect(()=>{
  //     axios.get('http://training.pixbit.in/api/designations',{headers:{'Authorization': 'Bearer ' + "asQ1nRbByT8xTRLoqx6cNtiipiramSDHXdQWEhJ2td9DxEz4MEJnBcQaauuKX9qct2GiQKSC91AUWMDb"}})
  //     .then(res=>{
  //         console.log(res);
  //         setname(res.data.data.data)
  //     })
  //     .catch(err=>{
  //         console.log(err);
  //     })
  // })

  return (
    <div>
      <Navbar />

      <div className="desgination-list">
        <div className="designation-heading">
          <h2>Employees List</h2>
          <button>add New Record</button>
        </div>

        <div className="designation-inputs">
          <input placeholder="Search"></input>
        </div>
      </div>

      <table className="desgination-table">
        <tr>
          <th>Sl.No</th>
          <th>Name</th>
          <th>Action</th>
        </tr>

        {name &&
          name.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>

              <td>
                <div className="button-btn">
                  <Edit color="white" />
                  <Trash2 color="white" />
                </div>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Desgination;
