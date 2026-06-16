const btn = document.getElementById('checkbtn');
let name = document.getElementById('name').value;
 btn.addEventListener('click', () => {
    let score = 100;
    if (document.getElementById('noise').value === 'yes') {
        score-=25;
    }
    if (document.getElementById('split').value === 'yes') {
        score-=25;
    }
    if (document.getElementById('trust').value === 'yes') {
        score-=25;
    }
    if (document.getElementById('closet').value === 'yes') {
        score-=25; 
    }
    let result = "";
    if (score === 100) {
       document.body.style.backgroundColor = "darkgreen";
    } else if (score ==75) {
        result = "Good Chances Stay Alert!🥶";
    } else if (score ==50) {
        result = "Things are not looking good!☹️";
    }
    else if (score ==25) {
        result = "You are in danger!🫥";
    }
    
    document.getElementById('result').innerHTML = `${name}, Survival Chances ${score}% <br> ${result}`;
 }); S