interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//create two students
const student1: Student ={
     firstName: "loice",
     lastName: "okello",
     age: 30,
     location: "mombasa",

};

const student2: Student ={
     firstName: "sharlyne",
     lastName: "otieno",
     age: 5,
     location: "mombasa",

};

//array of students
const studentsList: Student[] =[student1, student2]

// Render a table in the document
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const headerRow: HTMLTableRowElement = document.createElement("tr");

//Add table header
const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent ="Name";
 const locationHeader: HTMLTableCellElement =document.createElement("th");
 locationHeader.textContent ="Location";

 headerRow.appendChild(nameHeader);
 headerRow.appendChild(locationHeader);
 thead.appendChild(headerRow);
 table.appendChild(thead);

 const tbody: HTMLTableSectionElement = document.createElement("tbody");

 //Add students to the rows
 studentsList.forEach((student : Student ) => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const nameCell: HTMLTableCellElement = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);

 });

 table.appendChild(tbody);
document.body.appendChild(table);




 
