let nouveauCalcul = false;

function ajouter(value) {
    const display = document.getElementById('display');
    const operateurs = ['+', '-', '*', '/'];

    if (nouveauCalcul) {
        if (operateurs.includes(value)) {
            display.value += value;
        } else {
            display.value = value;
        }
        nouveauCalcul = false;
    } else {
        display.value += value;
    }
}

function check() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    nouveauCalcul = true;
}

function supprimer() {
    document.getElementById('display').value = '';
    nouveauCalcul = false;
}