document.querySelector("button").addEventListener("click", getPlayerInfo)

async function getPlayerInfo() {
    const playerName = document.querySelector("input").value
    try{
        const res = await fetch(`https://jazz-api.herokuapp.com/api/players/${playerName}`)
        const data = await res.json()
        document.querySelector("h2").innerText = data.position
    } catch(err) {
        console.log(err)
    }
}