let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
  ];
  
  let uppercaseNames = studentRecords.map((student) => student.name.toUpperCase());
  console.log(uppercaseNames);

  let highScorers = studentRecords.filter((student) => student.marks > 50);
//   let highScorerNames = highScorers.map((student) => studentRecords);
  console.log(highScorers);

  let highScorersWithHighIds = studentRecords.filter((student) => student.marks > 50 && student.id > 120);
          console.log(highScorersWithHighIds);

          let totalMarks = studentRecords.reduce((sum, student) => sum + student.marks, 0);
          console.log(totalMarks);

          let highScorersNames = studentRecords
            .filter((student) => student.marks > 50)
            .map((student) => student.name);
          
          console.log(highScorersNames);


          let sumMarks = studentRecords
            .filter((student) => student.id > 120)
            .reduce((sum, student) => sum + student.marks, 0);
          
          console.log(sumMarks);


          let total_Marks = studentRecords
            .map((student) => {
              if (student.marks < 50) {
                student.marks += 15; // Add grace marks 
              }
              return student;
            })
            .filter((student) => student.marks > 50)
            .reduce((sum, student) => sum + student.marks, 0);
          
          console.log(totalMarks);

          let student_Records = [
            { name: 'John', class: '10th', rollNo: 101 },
            { name: 'Jane ', class: '9th', rollNo: 202 },
            { name: 'Michael', class: '11th', rollNo: 303 },
            { name: 'Emily', class: '12th', rollNo: 404 },
            { name: 'David ', class: '10th', rollNo: 505 },
            { name: 'Sarah ', class: '9th', rollNo: 606 }
          ];
          
          console.log(student_Records);