// btnというidを持つHTML要素を取得し、定数に代入する
const pressBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const reviceText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
pressBtn.addEventListener('click', () => {
    // textの文字列を書き換える
    reviceText.textContent = 'ボタンをクリックしました';
});