function toggleShipping() {
    const shippingInfo = document.getElementById('shipping-info');
    const sameAdrCheckbox = document.getElementById('sameadr');
    if (sameAdrCheckbox.checked) {
        shippingInfo.classList.add('hidden');
    } else {
        shippingInfo.classList.remove('hidden');
    }
}
function validateForm() {
    // Collecting input fields and their validation rules
    /*
    const fields = [
        { id: "fname", message: "Full Name is required" },
        { id: "email", message: "Valid Email is required", type: "email" },
        { id: "adr", message: "Address is required" },
        { id: "city", message: "City is required" },
        { id: "state", message: "State is required" },
        { id: "zip", message: "Valid Zip Code is required", type: "zip" },
        { id: "cname", message: "Name on Card is required" },
        { id: "ccnum", message: "Valid Credit Card Number is required", type: "creditcard" },
        { id: "expmonth", message: "Expiration Month is required" },
        { id: "expyear", message: "Expiration Year is required", type: "year" },
        { id: "cvv", message: "Valid CVV is required", type: "cvv" }
    ];

    // Validation logic
    for (let field of fields) {
        const input = document.getElementById(field.id);
        const value = input.value.trim();
        let isValidField = true;

        if (!value) {
            isValidField = false;
        } else if (field.type) {
            switch (field.type) {
                case "email":
                    isValidField = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                    break;
                case "zip":
                    isValidField = /^\d{5}(-\d{4})?$/.test(value);
                    break;
                case "creditcard":
                    isValidField = /^[0-9]{16}$/.test(value.replace(/-/g, ""));
                    break;
                case "year":
                    isValidField = /^\d{4}$/.test(value) && parseInt(value, 10) >= new Date().getFullYear();
                    break;
                case "cvv":
                    isValidField = /^\d{3,4}$/.test(value);
                    break;
            }
        }

        if (!isValidField) {
            alert(field.message);
            input.focus();
            return false; // Stop form submission
        }
    }

    // All validations passed
    */
    return true; // Allow form submission
}
