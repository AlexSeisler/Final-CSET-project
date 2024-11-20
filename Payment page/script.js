function toggleShipping() {
    const shippingInfo = document.getElementById('shipping-info');
    const sameAdrCheckbox = document.getElementById('sameadr');
    if (sameAdrCheckbox.checked) {
        shippingInfo.classList.add('hidden');
    } else {
        shippingInfo.classList.remove('hidden');
    }
}
