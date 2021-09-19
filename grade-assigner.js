function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}
console.log(assignGrade);

for (i = 60; i <= 100; i++) {
    let grade = assignGrade;
    console.log(grade);
    if (grade >= 65 && grade <= 70) {
        console.log("Voor " + i + " punten, krijg je een D");
    }
    else if (grade >= 71 && grade <= 80) {
        console.log("Voor " + i + " punten, krijg je een C");
    }
    else if (grade >= 81 && grade <= 90) {
        console.log("Voor " + i + " punten, krijg je een B");
    }
    else if (grade >= 91) {
        console.log("Voor " + i + " punten, krijg je een A");
    }
    else {
        console.log("Voor " + i + " punten, krijg je een E");
    }
};