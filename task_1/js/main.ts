interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee?: boolean;
    yearsOfExperience: number;
    location: string;
    [propName: string]: any; // allow additional properties
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

const teacher1: Teacher = {
    firstName: "Mercy",
    lastName: "Akinyi",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Mombasa",
    contract: false,
};

const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    numberOfReports: 17,
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');

console.log(teacher1);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Mercy", "Akinyi")); 
console.log(student.displayName());  
console.log(student.workOnHomework()); 
