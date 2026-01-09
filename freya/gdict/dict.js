const url = "11liWMziBdRhVJwc_kM2TTcASjZS3QbvAmhvSwW5ocow"
const page = "Sheet1"

const data = await fetch("https://opensheet.elk.sh/"+url+"/"+page)
  .then(r => r.json());
console.log(data);