// Retrieve DOM elements
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to send message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        // Append message to chat box
        appendMessage(message, 'user');
        // Clear input field
        messageInput.value = '';
        // Send message to bot or backend
        // You can implement the logic to send the message to your Telegram bot here
    }
}

// Function to append message to chat box
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for send button
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key
messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
