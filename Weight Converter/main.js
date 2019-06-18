document.querySelector('#output').style.visibility = 'hidden';
document.querySelector('#lbsinput').addEventListener('input', function (e) {
    e.preventDefault();
    document.querySelector('#output').style.visibility = 'visible';
    let pounds = e.target.value;
    document.querySelector('#gramsoutput').innerHTML = pounds / 0.0022046;
    document.querySelector('#kgoutput').innerHTML = pounds / 2.2046;
    document.querySelector('#ozoutput').innerHTML = pounds * 16;
});