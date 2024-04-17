
let form = document.querySelector("form");
let resultDiv = document.querySelector("#result");


// add event listner on form when submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputWord = document.querySelector("#inputWord").value;

    getInfo(inputWord);


})


// functio to get info from api
const getInfo = async (word) => {

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();


    if (!response.ok) {
        resultDiv.innerHTML = `<p> <b class='text-danger'>Sorry! </b> Word is not found... </p>`
    }

   else {

    console.log(data[0]);
    // fetch data from api and show in result div
        resultDiv.innerHTML = `
        <h5>Word : ${word}</h5>
       <i class="lead d-block"> ${data[0].meanings[0].partOfSpeech}</i>
       <p> <strong>Meaning :</strong> ${data[0].meanings[0].definitions[0].definition} </p>
       <p> <strong>Synonyms :</strong> ${data[0].meanings[0].synonyms === 0 ? "Not Availble" : data[0].meanings[0].synonyms.join(", ")} </p>
   
       <p> <strong>Antonyms :</strong> ${data[0].meanings[1].antonyms === undefined ? "Not Availble" : data[0].meanings[1].antonyms.join(", ")} </p>
       
       <p> <strong>Example :</strong> ${data[0].meanings[0].definitions[0].example === undefined ? "Not Availble" : data[0].meanings[0].definitions[0].example}  </p>
   
      <a href='${data[0].sourceUrls[0]}' target='blank' class='btn btn-success btn-sm my-2'>Read More...</a>
     `;

    //  empty input 
     document.querySelector("#inputWord").value = "";

    }
}