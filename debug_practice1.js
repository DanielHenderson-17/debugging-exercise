function calculateGradeStats(grades) {
  let total = 0;
  let count = 0;
  let passingGrades = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade >= 60) {
      passingGrades.push(grade);
    }

    total += grade;
    count++;
  }

  let average = total / count;
  let passingCount = passingGrades.length;
  let passingRate;
  if (count === 0) {
    passingRate = 0;
  } else {
    passingRate = passingCount / count;
  }

  return {
    average: average,
    passingCount: passingCount,
    passingRate: passingRate,
    totalStudents: count,
  };
}

function processClassGrades(className, grades) {
  console.log(`Processing grades for ${className}:`);
  console.log(`Input grades: ${grades}`);

  let stats = calculateGradeStats(grades);

  console.log(`Average: ${stats.average.toFixed(2)}`);
  console.log(`Passing students: ${stats.passingCount}/${stats.totalStudents}`);
  console.log(`Passing rate: ${(stats.passingRate * 100).toFixed(1)}%`);
  console.log("---");

  return stats;
}

function main() {
  // Test cases
  let mathGrades = [85, 92, 78, 65, 45, 88, 90];
  let scienceGrades = [95, 83, 55, 72, 68, 91];
  let emptyClass = [];

  processClassGrades("Math", mathGrades);
  processClassGrades("Science", scienceGrades);
  processClassGrades("Empty Class", emptyClass);
}

// Run the program
main();
