const doc = document
const apiKey = 'b7NgGcR7fNyATXw0WUo75Ic4G48BLv9h'
let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=12&q=`
let output = doc.querySelector('.output')
let form  = doc.querySelector('form')

const getGiphy  = async (e) =>{
    e.preventDefault()
    output.innerHTML = ''
    let name = doc.querySelector('#search').value
    const req = await fetch(url + name)
    const resp = await req.json()
    const outputArray = resp.data
    
    outputArray.map(giphy => {
        let block = doc.createElement('div')
        block.className='cart'
        block.innerHTML = `
         <img src = ${giphy.images.downsized.url} class='cart__img'/>
         <h5>${giphy.title}</h5>
        `
        output.appendChild(block)
    })
}

form.addEventListener('submit',getGiphy)



