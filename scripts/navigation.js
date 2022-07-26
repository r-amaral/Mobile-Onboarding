const communitySection = document.querySelector('.community')
const deliverySection = document.querySelector('.delivery')
const toolsSection = document.querySelector('.tools')

const paginationItem = document.querySelectorAll('.pagination__item')
const buttonNavigation = document.querySelectorAll('button')


const paginationCommunity = document.querySelector(".pagination--community");
paginationCommunity.addEventListener("click", function (event) {

    if (event.target == paginationItem[1] || event.target == buttonNavigation[0]) {
        communitySection.style.left = '-200vw';
        deliverySection.style.left = '0';
        toolsSection.style.left = '200vw';
    }

    if (event.target == paginationItem[2] || event.target == buttonNavigation[1]) {
        communitySection.style.left = '-400vw';
        deliverySection.style.left = '-200vw';
        toolsSection.style.left = '0'
    }
})

const paginationDelivery = document.querySelector(".pagination--delivery");
paginationDelivery.addEventListener("click", function (event) {

    if (event.target == paginationItem[3]) {
        communitySection.style.left = '0vw';
        deliverySection.style.left = '200vw'
        toolsSection.style.left = '400vw';
    }

    if (event.target == paginationItem[5] || event.target == buttonNavigation[2] || event.target == buttonNavigation[3]) {
        communitySection.style.left = '-400vw';
        deliverySection.style.left = '-200vw'
        toolsSection.style.left = '0'
    }
})

const paginationTools = document.querySelector(".pagination--tools");
paginationTools.addEventListener("click", function (event) {

    if (event.target == paginationItem[6] || event.target == buttonNavigation[4]) {
        communitySection.style.left = '0vw';
        deliverySection.style.left = '200vw';
        toolsSection.style.left = '400vw';
    }
    if (event.target == paginationItem[7]) {
        communitySection.style.left = '-200vw';
        deliverySection.style.left = '0vw';
        toolsSection.style.left = '200vw';
    }
})
