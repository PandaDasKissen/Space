const url = "11liWMziBdRhVJwc_kM2TTcASjZS3QbvAmhvSwW5ocow"
const page = "Sheet1"
const data = await fetch("https://opensheet.elk.sh/"+url+"/"+page)
  .then(r => r.json());
console.log(data);

var Eng2Ger = false

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", onSearchInput);
function render(greg) {
    result.innerHTML = ""
    greg.forEach(item => {
        const peter = document.createElement("div")
        peter.textContent = Eng2Ger?item.Word:item.Translation
        result.append(peter)
    });
}
function onSearchInput() {
    const query = searchInput.value.toLowerCase();
    if (query == "")
        return
    var filtered
    if (Eng2Ger == true)
        filtered = data.filter(item => item.Translation.toLowerCase().includes(query));

    else
        filtered = data.filter(item => item.Word.toLowerCase().startsWith(query));
    console.log(filtered);
    render(filtered)
}

const langButton = document.getElementById("swapLang");
langButton.addEventListener("click",onButtonPress)
function onButtonPress() {
    Eng2Ger = !Eng2Ger
    if (Eng2Ger == true)
        searchInput.placeholder = "english word..."
    else
        searchInput.placeholder = "german word..."
    searchInput.value = ""
}

const result = document.getElementById("resultHolder")
