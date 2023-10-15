function countOccurrences() {
    const input = document.getElementById("inputField").value;
    const inputArray = input.split(",");
    const occurrences = {};

    for (let i = 0; i < inputArray.length; i++) {
        const item = inputArray[i].trim();
        if (occurrences[item]) {
            occurrences[item]++;
        } else {
            occurrences[item] = 1;
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    for (const item in occurrences) {
        resultsDiv.innerHTML += `You ordered"${item}" ${occurrences[item]} times.<br>`;
    }
}


/** 
@param {string []} arr 
@return {object}
*/ 
function getFlavorOccurences(arr){
    const counts = {};
    for (let element of arr){
        let trimmedElement = element.trim();
        counts[trimmedElement] = counts[trimmedElement] ? counts[trimmedElement] + 1 : 1;


}
 return counts;


}
