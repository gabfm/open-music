const allAlbumsButton = document.querySelector('.all')

allAlbumsButton.addEventListener('click', ()=> {
     
renderCards()

})

  const inputRange = document.querySelector('#price')
  
  inputRange.addEventListener('input', () => {

    const productsPrice = products.filter((element) => element.price <= inputRange.value)
    const productsFilter = productsPrice.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    productsFilter.forEach((element) => mainList.append(element))
  })

const popButton = document.querySelector('.pop')
popButton.addEventListener('click', () =>{

    const popAlbums = products.filter((element) => element.category == 1 )

    const popFiltredAlbum = popAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    popFiltredAlbum.forEach((element) => mainList.append(element))


})

const mpbButton = document.querySelector('.mpb')
mpbButton.addEventListener('click', () =>{

    const mpbAlbums = products.filter((element) => element.category == 2 )

    const mpbFiltredAlbum = mpbAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    mpbFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const forroButton = document.querySelector('.forro')
forroButton.addEventListener('click', () =>{

    const forroAlbums = products.filter((element) => element.category == 3 )

    const forroFiltredAlbum = forroAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    forroFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const sambaButton = document.querySelector('.samba')
sambaButton.addEventListener('click', () =>{

    const sambaAlbums = products.filter((element) => element.category == 4 )

    const sambaFiltredAlbum = sambaAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    sambaFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const baiaoButton = document.querySelector('.baiao')
baiaoButton.addEventListener('click', () =>{

    const baiaoAlbums = products.filter((element) => element.category == 5 )

    const baiaoFiltredAlbum = baiaoAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    baiaoFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const rapButton = document.querySelector('.rap')
rapButton.addEventListener('click', () =>{

    const rapAlbums = products.filter((element) => element.category == 6)

    const rapFiltredAlbum = rapAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    rapFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const hipHopButton = document.querySelector('.hip-hop')
hipHopButton.addEventListener('click', () =>{

    const hipHopAlbums = products.filter((element) => element.category == 7 )

    const hipHopFiltredAlbum = hipHopAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    hipHopFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const rockButton = document.querySelector('.rock')
rockButton.addEventListener('click', () =>{

    const rockAlbums = products.filter((element) => element.category == 8 )

    const rockFiltredAlbum = rockAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    rockFiltredAlbum.forEach((element) => mainList.append(element))
})

const reggaeButton = document.querySelector('.reggae')
reggaeButton.addEventListener('click', () =>{

    const reggaeAlbums = products.filter((element) => element.category == 9 )

    const reggaeFiltredAlbum = reggaeAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    reggaeFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const countryButton = document.querySelector('.country')
countryButton.addEventListener('click', () =>{

    const countryAlbums = products.filter((element) => element.category == 10 )

    const countryFiltredAlbum = countryAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    countryFiltredAlbum.forEach((element) => mainList.append(element))
   

})

const gospelButton = document.querySelector('.gospel')
gospelButton.addEventListener('click', () =>{

    const gospelAlbums = products.filter((element) => element.category == 11 )

    const gospelFiltredAlbum = gospelAlbums.map((products) => createCard(products))

    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    gospelFiltredAlbum.forEach((element) => mainList.append(element))
   

})