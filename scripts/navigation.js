const communitySection = document.querySelector('.community');
const deliverySection = document.querySelector('.delivery');
const toolsSection = document.querySelector('.tools');

const buttonNavigation = document.querySelectorAll('button');
const linkNavigation = document.querySelectorAll('a');

const pagination = document.querySelectorAll(".pagination");
const paginationItem = document.querySelectorAll('.pagination__item');

pagination[0].addEventListener("click", function (event) {
    if (event.target == paginationItem[1] || event.target == buttonNavigation[0]) {
        communitySection.style.left = '-200vw';
        deliverySection.style.left = '0';
        toolsSection.style.left = '200vw';
    }

    if (event.target == paginationItem[2] || event.target == linkNavigation[0]) {
        communitySection.style.left = '-400vw';
        deliverySection.style.left = '-200vw';
        toolsSection.style.left = '0';
    }
})

pagination[1].addEventListener("click", function (event) {
    if (event.target == paginationItem[3]) {
        communitySection.style.left = '0vw';
        deliverySection.style.left = '200vw';
        toolsSection.style.left = '400vw';
    }

    if (event.target == paginationItem[5] || event.target == buttonNavigation[1] || event.target == linkNavigation[1]) {
        communitySection.style.left = '-400vw';
        deliverySection.style.left = '-200vw';
        toolsSection.style.left = '0';
    }
})

pagination[2].addEventListener("click", function (event) {
    if (event.target == paginationItem[6] || event.target == buttonNavigation[2]) {
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
