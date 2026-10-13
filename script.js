const marksForm = document.getElementById("marksForm");
const results = document.getElementById("results");
const errorMessage = document.getElementById("errorMessage");
const resetButton = document.getElementById("resetButton");

const subjectIds = ["maths", "science", "english", "social", "computer"];

marksForm.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = "";

  const studentName = document.getElementById("studentName").value.trim();
  const marks = subjectIds.map((id) => Number(document.getElementById(id).value));

  if (!studentName) {
    showError("Please enter the student's name.");
    return;
  }

  const hasInvalidMarks = marks.some((mark, index) => {
    const input = document.getElementById(subjectIds[index]);
    return input.value.trim() === "" || !Number.isFinite(mark) || mark < 0 || mark > 100;
  });

  if (hasInvalidMarks) {
    showError("Enter a valid mark from 0 to 100 for every subject.");
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const percentage = (total / (marks.length * 100)) * 100;

  // Grade boundaries can be adjusted to match your institution's rules.
  let grade;
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "F";

  const passed = marks.every((mark) => mark >= 35);

  document.getElementById("resultStudent").textContent = `Results for ${studentName}`;
  document.getElementById("total").textContent = `${total}`;
  document.getElementById("average").textContent = average.toFixed(2);
  document.getElementById("percentage").textContent = `${percentage.toFixed(2)}%`;
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent = passed ? "Pass (all subjects)" : "Fail (below 35 in a subject)";

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function showError(message) {
  errorMessage.textContent = message;
  results.hidden = true;
}

resetButton.addEventListener("click", () => {
  errorMessage.textContent = "";
  results.hidden = true;
});
