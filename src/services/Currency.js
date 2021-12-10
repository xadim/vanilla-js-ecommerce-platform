const Currency = (amount) => {
    return amount.replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export default Currency;