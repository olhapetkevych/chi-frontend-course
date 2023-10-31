function createStudent(name, age, grades) {
    return new Object(name, age, grades)
}

function printData(student) {
    console.log("Name: "+student.name+"\nAge: "+student.age+"\nGrades: " + student.grades.toString())
}

function calculateAverageGrade(student) {
    if (student.grades.length < 3) {
        console.log("cannot calculate average grade - les than 3 grades")
        return;//added
    }
    
    sum = 0

    for (i = 0; i < student.grades.length; i++) {
        sum += student.grades[i]
    }

    average = sum / student.grades.length

    console.log(average)
}