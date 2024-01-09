import './style.css'

const products = [
  {
    name: 'Photography and Digital Content Creation',
    price: 100,
    campaign: 'People',
    image:
      'https://hormastudio.com/wp-content/uploads/2021/09/joselu_Portada_Digital-Media-and-Content.jpg'
  },
  {
    name: '2',
    price: 150,
    campaign: 'Fashion',
    image:
      'https://hormastudio.com/wp-content/uploads/2023/03/Portada-de-El-Badi-gif.gif'
  },
  {
    name: '3',
    price: 50,
    campaign: 'Fashion',
    image:
      'https://hormastudio.com/wp-content/uploads/2022/09/VEZ_Portada_SS22-1.jpg'
  },
  {
    name: '4',
    price: 95,
    campaign: 'Artistic',
    image:
      'https://hormastudio.com/wp-content/uploads/2022/04/VZ_madre_Portada_Digital-Media-and-Content.jpg'
  },
  {
    name: '5',
    price: 300,
    campaign: 'Fashion',
    image:
      'https://hormastudio.com/wp-content/uploads/2022/05/Moi-and-Sass_Portada-1.gif'
  },
  {
    name: '6',
    price: 5,
    campaign: 'Gastro',
    image:
      'https://hormastudio.com/wp-content/uploads/2021/11/Portadas_Restyling13.jpg'
  },
  {
    name: '7',
    price: 69,
    campaign: 'Gastro',
    image:
      'https://hormastudio.com/wp-content/uploads/2021/09/La-Cartuja-de-Sevilla_Portada.jpg'
  },
  {
    name: '8',
    price: 89,
    campaign: 'Gastro',
    image:
      'https://hormastudio.com/wp-content/uploads/2022/02/Portadas_Restyling5.jpg'
  },
  {
    name: '9',
    price: 90,
    campaign: 'People',
    image:
      'https://hormastudio.com/wp-content/uploads/2023/09/MikelIzal_Album.gif'
  },
  {
    name: '10',
    price: 420,
    campaign: 'People',
    image:
      'https://hormastudio.com/wp-content/uploads/2022/01/Eugenia-Silva_Portada.jpg'
  }
]

let product_list = document.getElementById('product_list')

for (let i = 0; i < products.length; i++) {
  let product = products[i]
  const div_list = document.createElement('div')
  div_list.className = 'campaign'
  //divelement.textContent = product.name
  product_list.appendChild(div_list)
  console.log(product_list)
}

document.addEventListener('DOMContentLoaded', function () {
  const product_list = document.getElementById('product_list')
  const checkboxes = document.querySelectorAll('.typeofcampaign')
  const priceInput = document.querySelector('.price_input')
  const filterButton = document.getElementById('filter_button')
  const removeFilterButton = document.getElementById('remove_filter_button')

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filterProducts)
  })

  filterButton.addEventListener('click', filterProducts)
  removeFilterButton.addEventListener('click', clearFilters)

  function filterProducts() {
    const selectedCampaigns = Array.from(checkboxes)
      .filter((cb) => cb.checked && cb.value !== 'ALL')
      .map((cb) => cb.value)

    const maxPrice = parseFloat(priceInput.value) || Infinity

    const filteredProducts = products.filter(
      (product) =>
        (selectedCampaigns.length === 0 ||
          selectedCampaigns.includes(product.campaign)) &&
        product.price <= maxPrice
    )

    showProducts(filteredProducts)
  }

  function clearFilters() {
    checkboxes.forEach((checkbox) => (checkbox.checked = false))
    priceInput.value = ''
    showProducts(products)
  }

  function showProducts(productsToShow) {
    product_list.innerHTML = ''

    for (let i = 0; i < productsToShow.length; i++) {
      let product = productsToShow[i]
      const div_list = document.createElement('div')
      div_list.className = 'campaign'

      // Crear elemento de imagen
      const imgElement = document.createElement('img')
      imgElement.src = product.image
      imgElement.alt = product.name

      // Crear contenedor de información
      const infoContainer = document.createElement('div')
      infoContainer.className = 'campaign-info'

      // Crear elemento para la campaña
      const campaignElement = document.createElement('p')
      campaignElement.className = 'campaign-campaign'
      campaignElement.textContent = product.campaign

      // Crear elemento para el precio
      const priceElement = document.createElement('p')
      priceElement.className = 'campaign-price'
      priceElement.textContent = `$${product.price.toFixed(2)}`

      // Agregar elementos al contenedor de información
      infoContainer.appendChild(campaignElement)
      infoContainer.appendChild(priceElement)

      // Agregar elementos al div de la campaña
      div_list.appendChild(imgElement)
      div_list.appendChild(infoContainer)

      // Agregar el div al contenedor de productos
      product_list.appendChild(div_list)
    }
  }

  // Mostrar todos los productos al cargar la página
  showProducts(products)
})
