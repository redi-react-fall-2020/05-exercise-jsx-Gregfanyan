import React from "react";
import "./styles.css";
import logo from "./logo.svg";
import team from "./team";

export default function App() {
  return (
  
    <>
    <header className="App-header">
      <img 
        src={logo} 
        alt="Spinning React logo" 
        className="App-logo" 
      />
      <h1>Redi React Fall 2020 Team</h1>
    </header>
    <main>
      <table className="members-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member) => (
            <tr className="member-row" key={member.name}>
              <td className="avatar-cell">
                <img src={member.image} alt={member.name} />
              </td>
              <td className="name-cell">{member.name}</td>
              <td className="role-cell">{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  </>
  )
}
