import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <p className="headings">Admin Templete</p>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/DesignationList">Desigination</Link>
          </li>
          <li>
            <Link to="/employeeList">Employee</Link>
          </li>
        </ul>
        {/* <div className='username'>
              <p>muhammad shafi</p>

            </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
