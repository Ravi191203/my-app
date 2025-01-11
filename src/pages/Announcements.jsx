import React from "react";

const Announcements = () => {
  return (
    <section>
      <h2>Announcements</h2>
      <ul className="list-group shadow-sm">
        <li className="list-group-item">
          <strong>Mid-term Exams:</strong> Start from March 15.
        </li>
        <li className="list-group-item">
          <strong>Project Deadline:</strong> Extended to April 10.
        </li>
        <li className="list-group-item">
          <strong>Library Update:</strong> New books have arrived!
        </li>
      </ul>
    </section>
  );
};

export default Announcements;
