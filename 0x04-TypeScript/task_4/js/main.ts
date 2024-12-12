/// <reference path="subjects/Teacher.ts" /> 
/// <reference path="subjects/Subject.ts" /> 
/// <reference path="subjects/Cpp.ts" /> 
/// <reference path="subjects/React.ts" /> 
/// <reference path="subjects/Java.ts" /> 

// Importing and referencing necessary files for the Teacher interface, Subject base class, 
// and specific subjects like Cpp, Java, and React.

export const cpp = new Subjects.Cpp();  // Creating a new instance of the Cpp class
export const java = new Subjects.Java();  // Creating a new instance of the Java class
export const react = new Subjects.React();  // Creating a new instance of the React class

// Defining a teacher with relevant experience
export const cTeacher: Subjects.Teacher = {
  firstName: "Bobby",  // Teacher's first name
  lastName: "Wine",    // Teacher's last name
  experienceTeachingC: 10,  // Teacher's experience teaching C++
};

// Logging C++ section details
console.log("C++"); 
cpp.setTeacher = cTeacher;  // Assigning the teacher to the Cpp class instance
console.log(cpp.getRequirements());  // Logging the list of C++ requirements
console.log(cpp.getAvailableTeacher());  // Logging the available teacher for C++

// Logging Java section details
console.log("Java");
java.setTeacher = cTeacher;  // Assigning the teacher to the Java class instance
console.log(java.getRequirements());  // Logging the list of Java requirements
console.log(java.getAvailableTeacher());  // Logging the available teacher for Java

// Logging React section details
console.log("React");
react.setTeacher = cTeacher;  // Assigning the teacher to the React class instance
console.log(react.getRequirements());  // Logging the list of React requirements
console.log(react.getAvailableTeacher());  // Logging the available teacher for React
