import React from "react"

const List =() =>{
var members = [
{
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
},
{
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
},
{
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
},
{ id: 66, name: "Emmet Foster", workExp: 22, deptExp: 9, isPermanent: true },
{ id: 89, name: "Brent Dolan", workExp: 16, deptExp: 12, isPermanent: true },
];

const permanentemployees = members.filter(
(employee) => employee.isPermanent === true
);
// console.log("permanentemployees", permanentemployees);

const nonpermanentemployees = members.filter(
(employee) => employee.isPermanent === false
);
// console.log("nonpermanentemployees", nonpermanentemployees);

return (

    
    <>
    
        <h1>permanentemployees</h1>
        <ul>
        {permanentemployees.map(pemp =>{
        
            return (<li key = {pemp.id}>
                {pemp.name}
            </li>)
        }) 
        }
        </ul>
        <h1>nonpermanentemployees</h1>
        <ul>
        {nonpermanentemployees.map(nemp =>{
            return(
                <li key = {nemp.id}>
                    {nemp.name}
                </li>
            )
        })}
        </ul>
    
    </>

);
}
export default List