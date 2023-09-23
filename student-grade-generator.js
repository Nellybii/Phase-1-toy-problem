
//assigning grades to a student.
// using nested if-else.
//all marks are between 0 and 100.
function Generator(scores) {
    if (scores >= 80) {
        grade = 'A'
    }
    else if (scores >= 60 && scores <= 79) {
        grade = 'B'
    }
    else if (scores >= 40 && scores <= 59) {
        grade = 'C'
    }
    else if (scores >= 40 && scores <= 49) {
        grade = 'D'
        
    }
    else {
        grade = 'E'
        
    }
}