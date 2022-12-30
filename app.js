"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
//     const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = { 
//     name: 'Amy', // 資料型別需跟上方型別一致，否則會報錯
//     age: 30,
//     hobbies: ['Sport','Music'],
//     role: [2, 'May']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AHTHOR"] = "AHTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Amy',
    age: 30,
    hobbies: ['Sport', 'Music'],
    role: Role.ADMIN
};
// person.role.push('Admin');
// person.role[1] = 10;
// Error: person.role = [0, 'adi', '']; Tuple元組超過固定長度會報錯
let favoriteActivities;
// Error: favoriteActivities = ['Sports', 1]; 陣列資料型別需一致
favoriteActivities = ['Sports', 'Cooking'];
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
