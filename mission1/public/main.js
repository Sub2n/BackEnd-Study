const $input = document.querySelector('.search');
const $submit = document.querySelector('.submit');

function sendAjax(url, data) {
  const body = {
    query: data,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(body));

  xhr.addEventListener('load', function () {
    const {
      result,
      answer
    } = JSON.parse(xhr.responseText);
    if (result !== 'ok') return;
    document.querySelector(
      '.result'
    ).innerHTML = `<h1>${answer}를 검색하셨네요~</h1>`;
  });
}

$input.addEventListener('keyup', function (e) {
  if (e.keyCode !== 13 || !e.target.value.trim()) return;
  else sendAjax('http://127.0.0.1:3000/search', e.target.value);
  $input.value = '';
});

$submit.addEventListener('click', function () {
  sendAjax('http://127.0.0.1:3000/search', $input.value);
  $input.value = '';
});