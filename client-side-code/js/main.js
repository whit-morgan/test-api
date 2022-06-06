document.querySelector('#cartridgeDropdown').addEventListener('click', makeReq)

async function makeReq(){
    const cartridgeName = document.querySelector('#cartridgeDropdown').value
    try{
        const res = await fetch(`https://cartridge-api-test.herokuapp.com/api/${cartridgeName}`)

        const data = res.json()
        document.querySelector('#showCartridgeName').innerText = data.name
        console.log(data)
}catch(error){
    console.error(error)
    }
}