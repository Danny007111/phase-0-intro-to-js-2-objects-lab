// Write your solution in this file!
const employee = {
    Danny: "23rd street"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; 
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    const newObj2 = {...employee};
    delete newObj2.key;
    return newObj2;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newObj3 = { ...employee };
    delete newObj3[key]
    return newObj3;
};

