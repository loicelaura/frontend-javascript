interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee?: boolean;
    yearsOfExperience:number;
    location: string;
    [propName: string]: any; // allow additional properties

}
//examples
const teacher1: Teacher ={
    firstName: "Mercy",
    lastName:"akinyi",
    fullTimeEmployee:true,
    yearsOfExperience:5,
    location:"mombasa",
    contract: false,
};

const teacher2: Teacher ={
     firstName: "winny",
    lastName:"akinyi",
    fullTimeEmployee:true,
    yearsOfExperience:3,
    location:"mombasa",
    contract: false,
    specialization:"mathematics",
};

console.log(teacher1);
console.log(teacher2);