let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/pkr.json";

let dropdowns = document.querySelectorAll(".currency-dropdowns select");



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
  let img = element.parentElement.querySelectorAll("img");
   img.src = newSrc;
   


}