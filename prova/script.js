const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');
const minorImage = document.getElementById('minorImage');
const adultImage = document.getElementById('adultImage');
const noImage = document.getElementById('noImage');


function calculateAge() {
    const day = parseInt(document.getElementById('dayInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const year = parseInt(document.getElementById('yearInput').value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (isNaN(ageInYears)) {
        const nome = prompt('Por favor, digite seu nome:');
        const ageString = ageInYears.toFixed(0);
        resultMessage.textContent = `${nome}, digita uma data namoral.`;
        resultMessage.style.color = 'black';
        noImage.style.display = 'block';
        minorImage.style.display = 'none';
        adultImage.style.display = 'none';
    } else if (ageInYears >= 18) {

        const nome = prompt('Por favor, digite seu nome:');
        const ageString = ageInYears.toFixed(0);
        resultMessage.textContent = `Opa ${nome}, você é maior de idade (${ageString} anos)`;
        resultMessage.style.color = 'greenyellow';
        minorImage.style.display = 'none';
        adultImage.style.display = 'block';
        noImage.style.display = 'none';
    } else {

        const nome = prompt('Por favor, digite seu nome:');
        const ageString = ageInYears.toFixed(0);
        resultMessage.textContent = `Opa opa opa ${nome}, você tem menos de 18 anos. (${ageString} anos)`;
        resultMessage.style.color = 'red';
        minorImage.style.display = 'block';
        adultImage.style.display = 'none';
        noImage.style.display = 'none';
    }

    document.getElementById('resultMessage').textContent = `${nome}, ${resultMessage}`;

}

checkButton.addEventListener('click', calculateAge);

