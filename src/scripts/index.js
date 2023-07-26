/* Desenvolva sua lógica aqui ... */


const createCard = (element) => {
    const card = document.createElement('li')
    card.classList.add('list__card')
    card.id = element.id

    const info = document.createElement('div')
    info.classList.add('info__card')
    info.id = element.id
    
    const img = document.createElement('img')
    img.src = element.img
    img.alt = 'Imagem do Produto'
    img.classList.add('album__img')

    const infoDiv = document.createElement('div')
    const band = document.createElement('p')
    band.innerText = element.band
    const year = document.createElement('p')
    year.innerText = element.year
    infoDiv.classList.add('info__container')
    
    const title = document.createElement('h4')
    title.innerText = element.title

    const footerDiv = document.createElement('div')
    const price = document.createElement('h4')
    price.innerText = `R$ ${element.price.toFixed(2)}`
    const buyButton = document.createElement('button')
    buyButton.innerText = 'Comprar'
    footerDiv.classList.add('footer__info')

    const category = document.createElement('span')
    category.innerHTML = categories[element.category]
    
  
    footerDiv.append(price,buyButton)
    infoDiv.append(band,year)
    info.append(infoDiv,title,footerDiv)
    card.append(img,info)
    
    return card
  }



  const renderCards = () => {
    
    
    const mainList = document.querySelector(".main__list")

    mainList.innerText = ""

    products.forEach((element) => {
        
    const card = createCard(element)
    
    mainList.appendChild(card)

    })
  
  }

  renderCards()