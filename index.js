console.log("hello world!!!");

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]
// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

     let newStudents = studentRecords.map(student =>student.name.toUpperCase());
     console.log(newStudents);

     //Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

    // [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

     let marks = studentRecords.filter(score => score.marks > 50);
     console.log(marks);

    // Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

    let recod = studentRecords.filter((score => score.marks >50) && (score => score.id >120 ));
    console.log(recod);

    //Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.


    let sum = studentRecords.reduce(((acc,curr) => acc + curr.marks),0);
    console.log(sum);

    //Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

    let  onlyNames = studentRecords.filter(score => score.marks > 50).map(student =>student.name);
    console.log(onlyNames);

    // Question 6: This time we are required to print the sum of marks of the students with id > 120.

    let sumId = studentRecords.filter(score => score.id > 120).reduce(((acc,curr) =>acc + curr.marks),0);
    console.log(sumId);


    //Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

    let graceMarks = studentRecords.map(function(item){ 
        if(item.marks < 50)
        {
            item.marks += 15;
        }
        return item;}).filter(item => item.marks > 50).reduce((acc,curr) => acc+curr.marks,0);
        
        console.log(graceMarks);

    
        //Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

        function student(studentName,studentClass,studentRoll)
        {
            this.studentName = studentName;
            this.studentClass = studentClass;
            this.studentRoll = studentRoll;
        }
        const person1 = new student('sairam',6,21);
        console.log(person1);

        const person2 = new student('akash',6,5);
        console.log(person2);

        const person3 = new student('ajay',6,9);
        console.log(person3);

        const person4 = new student('vineeth',6,18);
        console.log(person4);

        const person5 = new student('tara',6,10);
        console.log(person5);

        const person6 = new student('rambo',6,15);
        console.log(person6);

