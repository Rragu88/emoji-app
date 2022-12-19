let myEmojis = [];
const emojiContainer = document.getElementById('emojiContainer');
const emojiInput = document.getElementById('emoji-input');
const pushBtn = document.getElementById('push-btn');
const unshiftBtn = document.getElementById('unshift-btn');
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn');

function render(arr) {
    emojiContainer.innerHTML = '';
    arr.forEach(emoji => {
        const emojiSpan = document.createElement('span');
        emojiSpan.textContent = emoji;
        emojiContainer.appendChild(emojiSpan);
    });
}

function modifyEmojiArray(type, arr) {
    if (type === "push" && emojiInput.value) {
        arr.push(emojiInput.value);
    } else if (type === "unshift" && emojiInput.value) {
        arr.unshift(emojiInput.value);
    } else if (type === "pop") {
        arr.pop();
    } else if (type === "shift") {
        arr.shift();
    }
    localStorage.setItem('myEmojis', JSON.stringify(arr));
    emojiInput.value = '';
    render(arr);
}

pushBtn.addEventListener('click', () => {   
    modifyEmojiArray("push", myEmojis);
});

unshiftBtn.addEventListener('click', () => {
    modifyEmojiArray("unshift", myEmojis);
});

popBtn.addEventListener('click', () => {
    modifyEmojiArray("pop", myEmojis);
});

shiftBtn.addEventListener('click', () => {
    modifyEmojiArray("shift", myEmojis);
});
