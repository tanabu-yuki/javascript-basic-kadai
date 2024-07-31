const pressBtn = document.getElementById('btn');

const reviceText = document.getElementById('text');

pressBtn.addEventListener('click', () => {
    setTimeout( () => {
        reviceText.textContent = 'ボタンをクリックしました';
    }, 2000);
});