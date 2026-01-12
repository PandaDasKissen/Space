const url = "11liWMziBdRhVJwc_kM2TTcASjZS3QbvAmhvSwW5ocow"
const page = "Sheet1"
const data = await fetch("https://opensheet.elk.sh/"+url+"/"+page)
  .then(r => r.json());
console.log(data);
data.forEach(word => {
    word.Translation = word.Translation.split(",").map(thing => thing.trim())
})

var Eng2Ger = false

function edit(word,fn,arg) {
    return word.Translation.map(thing => thing[fn](arg))
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", onSearchInput);
function render(words) {
    result.innerHTML = ""
    words.forEach(word => {
        const wrap = document.createElement("div")
        wrap.className = "wrap"

        const title = document.createElement("h2")
        title.className = "wordTitle" 
        title.textContent = word.Word

        const trans = document.createElement("p")
        trans.className = "trans"
        trans.textContent = "English:"+word.Translation.join(", ")+"\n\n"+word.Explanation

        

        


        wrap.append(title,trans)
        result.append(wrap)
    });
}

function onSearchInput() {
    const query = searchInput.value.toLowerCase();
    if (query == "")
        return
    var filtered
    if (Eng2Ger == true)
        filtered = data.filter(word => {
            var found = false
            const tempList = edit(word,"toLowerCase")
            tempList.forEach(thing => {
                if (thing.startsWith(query))
                    found = true
            })
            return found
        });

    else
        filtered = data.filter(word => word.Word.toLowerCase().startsWith(query));
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
