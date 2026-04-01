// Evion Tutoring JavaScript functionality

function startTutoringSession() {
    console.log('Tutoring session has started.');
}

function endTutoringSession() {
    console.log('Tutoring session has ended.');
}

function submitQuestion(question) {
    console.log('Question submitted: ' + question);
}

// Export functions for external use
module.exports = { startTutoringSession, endTutoringSession, submitQuestion };