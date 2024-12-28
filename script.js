const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.icon');
        const isActive = answer.classList.contains('active');

        faqQuestions.forEach(item => {
            item.nextElementSibling.classList.remove('active');
            item.querySelector('.icon').textContent = '+';
            item.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
            answer.classList.add('active');
            icon.textContent = '-';
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// keydown pour détecter les touches du clavier lorsqu'une question est sélectionnée.
faqQuestions.forEach((question, index) => {
    question.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            const nextQuestion = faqQuestions[index + 1];
            if (nextQuestion) nextQuestion.focus();
        } else if (event.key === 'ArrowUp') {
            const prevQuestion = faqQuestions[index - 1];
            if (prevQuestion) prevQuestion.focus();
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            question.click();
        }
    });
});