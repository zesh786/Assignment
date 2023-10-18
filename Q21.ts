// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let Books=[
    {
        name: "Pakistan at the helm",
        Author: "Tilak Diasher",
        Published: 2019
    },
    {
        name: "New world order",
        Author: "Henery Kissinger",
        Published: 2021
    },
    {
        name: "From kargil to the coup",
        Author: "Naseem Zahra",
        Published: 2018
    },
    {
        name: "My Brother",
        Author: "Fatima Jinnah",
        Published: 1990
    }
]
for (let i = 0; i < Books.length; i++) {
    let serialNumber= i + 1;
    console.log(`${serialNumber}: Name: ${Books[i].name} \n Author: ${Books[i].Author} \n Published Year:  ${Books[i].Published}`);
    
}