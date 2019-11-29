// Challenge1: Age in days

function ageByDays () {
    var birthYear = prompt('What year were you born?');
    var yourAgeInDays = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + yourAgeInDays + ' days old, my friend.');
    h1.setAttribute('id', 'ageByDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageByDays').remove();
}