// Handle form submission
window.addEventListener("DOMContentLoaded", function () {
    const yourForm = document.getElementById("myForm");
    yourForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(yourForm);
        const action = e.target.action;
        fetch(action, {
            method: "POST",
            body: data,
        }).then(() => {
            window.location.replace("thankyou");
        });
    });
});

function togglePaymentField() {
    var paymentTypeSelect = document.getElementById("PaymentType");
    var paymentField = document.getElementById("paymentField");
    var paymentUsernameLabel = document.getElementById("paymentUsernameLabel");
    var paymentUsernameInput = document.getElementById("PaymentUsername");
    var phoneNumberInput = document.getElementById("PhoneNumber");

    if (paymentTypeSelect.value === "paypal") {
        paymentField.style.display = "block";
        paymentUsernameLabel.innerText = "Paypal Username:";
        paymentUsernameInput.placeholder = "example@paypal.com";
        phoneNumberInput.required = false;
    } else if (paymentTypeSelect.value === "cashapp") {
        paymentField.style.display = "block";
        paymentUsernameLabel.innerText = "CashApp Username:";
        paymentUsernameInput.placeholder = "$example";
        phoneNumberInput.required = false;
    } else if (paymentTypeSelect.value === "venmo") {
        paymentField.style.display = "block";
        paymentUsernameLabel.innerText = "Venmo Username:";
        paymentUsernameInput.placeholder = "@example";
        phoneNumberInput.required = false;
    } else if (paymentTypeSelect.value === "applecash") {
        phoneNumberInput.required = true;
    } else {
        paymentField.style.display = "none";
        phoneNumberInput.required = false;
    }
}

// Initialize Google Maps Places Autocomplete for the shipping address field
function initAutocomplete() {
    var shippingAddressInput = document.getElementById('shippingAddressInput');
    var autocomplete = new google.maps.places.Autocomplete(shippingAddressInput);
}

// Call initAutocomplete function when the page loads
window.onload = function() {
    initAutocomplete();
};

