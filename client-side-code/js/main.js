document.querySelector('#cartridgeDropdown').addEventListener('click', makeReq)

async function makeReq(){
    const cartridgeName = document.querySelector('#cartridgeDropdown').value
    try{
        const res = await fetch(`https://cartridge-api-test.herokuapp.com/api/${cartridgeName}`)

        const data = res.json()

        console.log(data)
}catch(error){
    console.error(error)
    }
}