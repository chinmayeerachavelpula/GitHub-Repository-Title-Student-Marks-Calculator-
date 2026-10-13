# Student Marks Calculator

A beginner-friendly web project that calculates a student's total marks, average, percentage, grade, and pass/fail status.

## Features

- Enter a student name and marks for five subjects
- Validates that every mark is between 0 and 100
- Calculates total marks, average, and percentage
- Assigns a grade based on percentage
- Shows pass status when every subject mark is at least 35
- Responsive layout for desktop and mobile screens
- Clear button to reset the form

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run

1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Enter the student's name and marks.
4. Click **Calculate Results**.

No installation or server is required.

## Grade Rules

| Percentage | Grade |
|---|---|
| 90–100% | A+ |
| 80–89.99% | A |
| 70–79.99% | B |
| 60–69.99% | C |
| 50–59.99% | D |
| Below 50% | F |

The pass/fail rule is separate: a student passes only if every subject mark is at least 35. Adjust these rules in `script.js` if your institution uses different criteria.

## Project Structure

```text
Student-Marks-Calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Future Improvements

- Add more subjects or allow users to choose the number of subjects
- Print or download a result report
- Save multiple student records
- Add a backend and database

## License

This project is available for learning and educational use.
