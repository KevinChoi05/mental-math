const additionCheckbox = document.getElementById('addition');
const additionMin = document.getElementById('addition-min');
const additionMax = document.getElementById('addition-max');
const subtractionCheckbox = document.getElementById('subtraction');
const subtractionMin = document.getElementById('subtraction-min');
const subtractionMax = document.getElementById('subtraction-max');
const multiplicationCheckbox = document.getElementById('multiplication');
const multiplicationMin = document.getElementById('multiplication-min');
const multiplicationMax = document.getElementById('multiplication-max');
const divisionCheckbox = document.getElementById('division');
const divisionMin = document.getElementById('division-min');
const divisionMax = document.getElementById('division-max');

const settings = {
  addition: {
    enabled: additionCheckbox.checked,
    min: parseInt(additionMin.value, 10),
    max: parseInt(additionMax.value, 10)
  },
  subtraction: {
    enabled: subtractionCheckbox.checked,
    min: parseInt(subtractionMin.value, 10),
    max: parseInt(subtractionMax.value, 10)
  },
  multiplication: {
    enabled: multiplicationCheckbox.checked,
    min: parseInt(multiplicationMin.value, 10),
    max: parseInt(multiplicationMax.value, 10)
  },
  division: {
    enabled: divisionCheckbox.checked,
    min: parseInt(divisionMin.value, 10),
    max: parseInt(divisionMax.value, 10)
  }
};

additionCheckbox.addEventListener('change', () => {
  settings.addition.enabled = additionCheckbox.checked;
});

subtractionCheckbox.addEventListener('change', () => {
  settings.subtraction.enabled = subtractionCheckbox.checked;
});

multiplicationCheckbox.addEventListener('change', () => {
  settings.multiplication.enabled = multiplicationCheckbox.checked;
});

divisionCheckbox.addEventListener('change', () => {
  settings.division.enabled = divisionCheckbox.checked;
});

additionMin.addEventListener('change', () => {
  settings.addition.min = parseInt(additionMin.value, 10);
});

additionMax.addEventListener('change', () => {
  settings.addition.max = parseInt(additionMax.value, 10);
});

subtractionMin.addEventListener('change', () => {
  settings.subtraction.min = parseInt(subtractionMin.value, 10);
});

subtractionMax.addEventListener('change', () => {
  settings.subtraction.max = parseInt(subtractionMax.value, 10);
});

multiplicationMin.addEventListener('change', () => {
  settings.multiplication.min = parseInt(multiplicationMin.value, 10);
});

multiplicationMax.addEventListener('change', () => {
  settings.multiplication.max = parseInt(multiplicationMax.value, 10);
});

divisionMin.addEventListener('change', () => {
  settings.division.min = parseInt(divisionMin.value, 10);
});

divisionMax.addEventListener('change', () => {
  settings.division.max = parseInt(divisionMax.value, 10);
});
