function checkAnswer(answer) {
    const result1 = document.getElementById('result1');
    if (answer === 'a') {
        result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result1.style.color = 'green';
    }
    else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
    }
}
function checkAnswerColor(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'yellow') {
        result2.textContent = "ถูกต้อง";
        result2.style.color = 'green';
    }
    else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
}

