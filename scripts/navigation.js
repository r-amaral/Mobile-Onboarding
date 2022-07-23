const communityButton = document.querySelectorAll('.community');
const deliveryButton = document.querySelectorAll('.delivery');
const toolsButton = document.querySelector('.tools');

communityButton.forEach(button => {

    button.addEventListener('click', () => {

        if (button.textContent == 'Continue') {
            window.open('../views/safe-delivery.html', '_self')
        } else {
            window.open('../views/buy-&-sell-tools.html', '_self')
        }

    })
})

deliveryButton.forEach(button => {

    button.addEventListener('click', () => {

        window.open('../views/buy-&-sell-tools.html', '_self')

    })

})

toolsButton.addEventListener('click', () => {
    window.open('../index.html', '_self')
})



