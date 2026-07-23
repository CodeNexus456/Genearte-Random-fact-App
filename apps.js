let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=> {
  let Multiplefact = await getFact();
  document.querySelector("p").innerText = Multiplefact;
})

async function getFact() {
  try {
    let responce = await axios.get(url);
    return responce.data.fact;
  } catch (error) {
    console.log(error);
  }
}
