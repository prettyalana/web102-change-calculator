var currencyTypes = [
    ["Dollar", 100],
    ["Quarter", 25],
    ["Dime", 10],
    ["Nickel", 5],
    ["Penny", 1]
]

function calculateChange(amountDue, amountReceived) {
    let change = 0;
    change = Math.round((amountReceived - amountDue) * 100); 

    const count = new Map();
    currencyTypes.forEach((currency) => {

    let currencyFit = Math.floor(change/currency[1]);

    change = change - (currencyFit * currency[1]);

    count.set(currency[0], currencyFit)
    });

    return count;
}
 
   document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calc-form");
    const button = document.getElementById("calculate-change")
   form.addEventListener("submit", function (event) {
        // Prevent page reload
        event.preventDefault();
        const amountDue = Number(document.getElementById("amount-due").value);
        const amountReceived = Number(document.getElementById("amount-received").value);
        const result = calculateChange(amountDue, amountReceived)
            const dollars = document.getElementById("dollars-output")
            dollars.textContent = result.get("Dollar");
            const quarters = document.getElementById("quarters-output")
            quarters.textContent = result.get("Quarter")
            const dimes = document.getElementById("dimes-output")
            dimes.textContent = result.get("Dime")
            const nickels = document.getElementById("nickels-output")
            nickels.textContent = result.get("Nickel")
            const pennies = document.getElementById("pennies-output")
            pennies.textContent = result.get("Penny")

        setTimeout(() => {
            this.reset();
            dollars.textContent = 0, quarters.textContent = 0, dimes.textContent = 0, nickels.textContent = 0, pennies.textContent = 0;
        }, 5000);
    })
    });