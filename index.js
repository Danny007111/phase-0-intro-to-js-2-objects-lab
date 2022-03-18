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
    newObj2[key] = value; 
    return newObj2;
};

// const destructivelyUpdateObject = updateEmployeeWithKeyAndValue(employee, key, value);




