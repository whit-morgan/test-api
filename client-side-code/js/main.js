
document.querySelector('#cartridgeDropdown').addEventListener('click', makeReq)


async function makeReq(){
    const cartridgeName = document.querySelector('#cartridgeDropdown').value
    try{
        const res = await fetch(`https://cartridge-api-test.herokuapp.com/api/${cartridgeName}`)

        const data = await res.json()
        console.log(data)
        
        //this converts the data objects to arrrays so I can iterate over them
        const entries = Object.entries(data)
        
        //loop checks to see if there are elements in the list, if so it removes them
        while(document.querySelector('#cartridgeList').firstChild){
            document.querySelector('#cartridgeList').firstChild.remove()
        }

        //loop cycles through entries array and appends the elements as list items in the dom
        entries.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = `${obj[0]}:  ${obj[1]}`
            document.querySelector('#cartridgeList').appendChild(li)
        })


        

}catch(error){
    console.error(error)
    }
}