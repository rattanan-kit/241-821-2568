// /*
// this is comment
// */

// console.log("hello world ")
// console.log("This is java script")

// const PI = 3.14

// let fname = "john";

// let age = 30;
// let height = 5.8;

// fname = "Alice"

// console.log("name:",fname)
// console.log("Age:",age)
// console.log("Height:",height)



// let number1 = "10";
// let number2 = "3";

// let result1 = number1 + number2;
// console.log("ผลบวก: ",result1);

// let condition = nuumber1 < number2;     // True
// console.log("condition: ", condition);

// let number1 = 3;
// let number2 = 4;



// let score = prompt("Enter your score: "); 
// let grade = ''

// if (score >= 80) {
//     grade = "A";
// } else if (score >= 70) {
//     grade = "B";
// } else if (score >= 60) {
//     grade = "C";
// } else if (score >= 50) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// console.log("Grade: ", grade);


// let number1 = 0;
// let number2 = 1;

// let condition = (number1 > 0) && (number2 > 0); // False
// console.log("condition: ", condition);

// let condition2 = (number1 > 0) || (number2 > 0); // True
// console.log("condition2: ", condition2);

// let age = 25;
// let gender = "female";

// if (age >= 18 && gender == "female") {
//     console.log("คุณเข้าร่วมได้");
// }

// let number1 = 21;

// if (number1 % 2 != 0) {
//     console.log("is Odd");
// }
// else {
//     console.log("is Even");
// }   


// for (let i = 1; i <= 5; i++) {
//     console.log("For:", i);
// }   


// let student =  [{
//     age: 20,
//     name: "emma",
//     grade: "A"
// } ,{
//     age: 22,
//     name: "olivia",
//     grade: "B"

// }]

// console.log(student);


// Function
    // function calculate_grade(score) {
    //     if (score >= 80) {
    //         return "A";
    //     }
    //     else if (score >= 70) {
    //         return "B";
    //     }
    //     else if (score >= 60) {
    //         return "C";
    //     }
    //     else if (score >= 50){
    //         return 'd';
    //     }
    //     else {
    //         return "F";
    //     }
    // }

    // console.log("student grade is ",calculate_grade());  


// array and loop
    // let score = [10,20,30,40,50];
    // score = score.map((s) => {
    //     return s * 2;        
    // })

    // for (let i  =  0; i< score.length; i++) {
    //     console.log(`score at index ${i} is ${score[i]}`); 
    // }

    // score.forEach((s) => {
    //     console.log("score is ", s);
    // })

// let score = [10,20,30,40,50]

// // for(let index = 0; index < score.length; index++) {
// //     console.log('score :',score[index])
// // }

// let newScore = score.filter((s) => {
//     return s >= 30
// })

// })
// newScore.forEach((ns) => {
//     console.log(`newScore : ${ns}`)


// console.log("newScore :",newScore)


let student = [
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },{
        name: 'bb',
        score: '60',
        grade: 'B'
    }

]

console.log(student[0])

let students = student.find((s) => {
    if (s.name == 'bb'){    
        return true
    }
})

let doubleScore_student = student.map((s) => {
    s.score = s.score * 2
    return s
})

console.log(doubleScore_student)


let highscore = student.filter((s) => {
    if (s.score >= 110) {
        return true
    }
})

console.log("high score",highscore)