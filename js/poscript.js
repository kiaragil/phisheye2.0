function toggleShippingAddressField() {
    var shippingSelect = document.getElementById("Shipping");
    var shippingAddressField = document.getElementById("shippingAddressField");

        if (shippingSelect.value === "yes") {
            shippingAddressField.style.display = "block";
        } else {
            shippingAddressField.style.display = "none";
        }
} //has listener in html file

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


// Add input mask for phone number
document.addEventListener('DOMContentLoaded', function() {
    var phoneNumberInput = document.getElementById('PhoneNumber');

    phoneNumberInput.addEventListener('input', function(event) {
        var input = event.target.value.replace(/\D/g, '').substring(0, 10);
        var areaCode = input.substring(0, 3);
        var middle = input.substring(3, 6);
        var last = input.substring(6, 10);

        if (input.length > 6) {
            event.target.value = `(${areaCode}) ${middle}-${last}`;
        } else if (input.length > 3) {
            event.target.value = `(${areaCode}) ${middle}`;
        } else if (input.length > 0) {
            event.target.value = `(${areaCode}`;
        }
    });
});

// Initialize Google Maps Places Autocomplete for the shipping address field
function initAutocomplete() {
    var shippingAddressInput = document.getElementById('shippingAddressInput');
    var autocomplete = new google.maps.places.Autocomplete(shippingAddressInput);
}

// Call initAutocomplete function when the page loads
window.onload = function() {
    initAutocomplete();
};

