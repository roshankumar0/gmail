import React, { useState } from 'react';

// Corrected structure of the people array
let people = [
    {
        type: "teachers",
        data: [
            { name: "Mr. Smith", class: "Mathematics", salary: 50000 },
            { name: "Ms. Johnson", class: "Science", salary: 55000 },
            { name: "Mrs. Brown", class: "History", salary: 52000 }
        ]
    },
    {
        type: "students",
        data: [
            { name: "John Doe", class: "Mathematics", rollNumber: 101 },
            { name: "Jane Smith", class: "Science", rollNumber: 102 },
            { name: "Sam Brown", class: "History", rollNumber: 103 }
        ]
    }
];

const Mapping = () => {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [hide, setHide] = useState(true)
    // Function to handle button clicks
    const handleClick = (type) => {
        for (let i = 0; i < people.length; i++) {
            if (people[i].type === type) {
                if (people[i].type === 'teachers') {
                    setTeachers(people[i].data)
                    setHide(!hide)
                }
                else if (people[i].type === 'students') {
                    setStudents(people[i].data)
                }
                return
            }
        }
    }

    return (
        <div>
            {/* Generate buttons for teachers and students */}
            <button onClick={() => handleClick("teachers")}>Teachers</button>
            <button onClick={() => handleClick("students")}>Students</button>

            {/* Render the list of teachers */}
            {hide &&
                teachers.length > 0 && (
                    <div>
                        <h2>Teachers:</h2>
                        {teachers.map((teacher, index) => (
                            <div key={index}>
                                <h3>{teacher.name}</h3>
                                <p>Class: {teacher.class}</p>
                                <p>Salary: ${teacher.salary}</p>
                            </div>
                        ))}
                    </div>
                )
            }

            {/* Render the list of students */}
            {students.length > 0 && (
                <div>
                    <h2>Students:</h2>
                    {students.map((student, index) => (
                        <div key={index}>
                            <h3>{student.name}</h3>
                            <p>Class: {student.class}</p>
                            <p>Roll Number: {student.rollNumber}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Mapping;
