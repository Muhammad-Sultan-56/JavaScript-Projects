let BASE_URL = 
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".currency-dropdowns select");

let btn = document.querySelector("#btn");

let toAmt = document.querySelector(".to select");
let fromAmt = document.querySelector(".from select");




for (let select of dropdowns) {
    for (let currCode in countryList) {
        // creating new option dynamically
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // select by default usd to pkr
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selectd";
        }
        else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selectd";
        }
    
    // apend option in select
    select.append(newOption);
}
    // event on change coutry
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    })

}


// function to change flag
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img"); // Use querySelector for a single image
    img.src = newSrc; // Update the src attribute
};

btn.addEventListener("click" , async (e) => {
e.preventDefault();
    let Useramount = document.querySelector("#Useramount");
    let amtVal = Useramount.value;
    if(amtVal == "" || amtVal < 1){
        amtVal.value = 1;
        Useramount = "1";
    }
    
    const URL = `${BASE_URL}/${fromAmt.value.toLowerCase()}/${toAmt.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.toAmt.value.toLowerCase();
    let finalAmount = rate * amtVal;

    let result = document.querySelector("#result");
    result.innerText = `${amtVal} ${fromAmt.value} = ${finalAmount} ${toAmt}`
})