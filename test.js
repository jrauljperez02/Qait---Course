function AddTwoNumbers(num1, num2){
    return num1 + num2;
}
//Arrow function 
const MyArrowFunction = (num1, num2) => {
    return num1 - num2;
};

// const - let
const result = AddTwoNumbers(1,3);
const result_of_myArrowFunction = MyArrowFunction(3,1);

console.log(result_of_myArrowFunction);