const xmlString = `
<products>
    <product>
        <designer>@Bruhich</designer>
        <price>0.005 ETH</price>
        <name>Фигурки</name>
        <image>./img/cardOne.jpg</image>
    </product>
    <product>
        <designer>@Jon</designer>
        <price>0.012 ETH</price>
        <name>Маяк</name>
        <image>./img/cardTwo.jpg</image>
    </product>
    <product> 
        <designer>@Tema</designer>
        <price>0.018 ETH</price>
        <name>Волшебные круги</name>
        <image>./img/cardThree.jpg</image>
    </product>
    <product>
        <designer>@Mark</designer>
        <price>0.001 ETH</price>
        <name>Цилиндры</name>
        <image>./img/cardFour.jpg</image>
    </product>
    <product>
        <designer>@darkreve</designer>
        <price>0.050 ETH</price>
        <name>Круги</name>
        <image>./img/cardFive.jpg</image>
    </product>
    <product>
        <designer>@ressevet</designer>
        <price>0.020 ETH</price>
        <name>Тёмный ангел</name>
        <image>./img/cardSix.jpg</image>
    </product>
    <product>
        <designer>@Anastasia</designer>
        <price>0.009 ETH</price>
        <name>Девочка в поле</name>
        <image>./img/cardSeven.jpg</image>
    </product>
    <product>
        <designer>@tom</designer>
        <price>0.011 ETH</price>
        <name>Шустерёнки</name>
        <image>./img/cardEight.jpg</image>
    </product>
    <product>
        <designer>@Jerry</designer>
        <price>0.300 ETH</price>
        <name>Шарики</name>
        <image>./img/cardNeine.jpg</image>
    </product>
</products>
`;


const parser = new DOMParser();


const xmlDoc = parser.parseFromString(xmlString, 'text/xml');


const products = xmlDoc.querySelectorAll('product');


const allCardElement = document.querySelector('.allcard');


products.forEach((product) => {
    const name = product.querySelector('name').textContent;
    const price = product.querySelector('price').textContent;
    const designer = product.querySelector('designer').textContent;
    const imageURL = product.querySelector('image').textContent;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const detailsAndPriceDiv = document.createElement('div');
    detailsAndPriceDiv.classList.add('details-and-price');

    const innerDiv1 = document.createElement('div');
    innerDiv1.classList.add('product-details');

    const innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('product-price');

    const nameElement = document.createElement('p');
    nameElement.textContent = name;

    const designerElement = document.createElement('h2');
    designerElement.textContent = designer;

    const priceElement = document.createElement('p');
    priceElement.textContent = `${price}`;

    const priceLabelElement = document.createElement('h2');
    priceLabelElement.textContent = 'Цена:';

    const imageElement = document.createElement('img');
    imageElement.src = imageURL;

    const buttonElement = document.createElement('button');
    buttonElement.textContent = "Добавить в корзину";
    buttonElement.classList.add('addBasketButton');
    buttonElement.id = 'addBasketButton';

    buttonElement.addEventListener('click', function(event) {
        const clickedButton = event.target;
        if (clickedButton.textContent === "Добавить в корзину") {
            clickedButton.textContent = "Товар добавлен";
        }
    });


    innerDiv1.appendChild(designerElement);
    innerDiv1.appendChild(nameElement);

    innerDiv2.appendChild(priceLabelElement);
    innerDiv2.appendChild(priceElement);

    detailsAndPriceDiv.appendChild(innerDiv1);
    detailsAndPriceDiv.appendChild(innerDiv2);

    productCard.appendChild(imageElement);
    productCard.appendChild(detailsAndPriceDiv);
    productCard.appendChild(buttonElement);

    allCardElement.appendChild(productCard);
});

