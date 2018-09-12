var target = document.getElementById('target');
var titles = [
    '👌',
    'whats the deal with airplane food',
    'honk honk cabbage',
    'radical and sadical',
    'e'
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

newTitle();