// btnというidを持つHTML要素を取得し、定数に代入する
const pressBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text').textContent;

// HTML要素がクリックされたときにイベント処理を実行する
pressBtn.addEventListener('click', () => {
    // textの文字列を書き換える
    document.getElementById('text').textContent = 'ボタンをクリックしました';
});