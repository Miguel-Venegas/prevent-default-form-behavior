
const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e){
    alert('Submitted the form');
    console.log('cc', creditCardInput.value);
    console.log('terms', termsCheckbox.checked);
    console.log('veggie', veggieSelect.value);
    e.preventDefault();

});

// The code below allows you to capture the creditCardInput's value as it is being updated in real-time. This is different than the above example because you don't have to wait for the form to be submitted.

    creditCardInput.addEventListener('input', e => {
        console.log('cc Changed', e);
    })

// The code below captures the values and places them into an empty object called formData.

const formData = {};

veggieSelect.addEventListener('input', e => {
    console.log('Veggie Changed', e);
    formData['veggie'] = e.target.value;
})

// the code below adds more data into the formData object:

termsCheckbox.addEventListener('input', e => {
    console.log('Checkbox', e);
    formData['agreeToTerms'] = e.target.checked;
})

// the code below simplifies the code above. 

// const formData = {};

// for(let input of [creditCardInput, termsCheckbox, veggieSelect]){
//     input.addEventListener('input', ({target}) => {
//         const {name, type, value, checked} = target;
//         formData[name] = type === 'checkbox' ? checked : value;
//     })
// }