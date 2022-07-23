const communityButton = document.getElementById('community')
const deliveryButton = document.getElementById('delivery');
const toolsButton = document.getElementById('tools');

const button = document.querySelectorAll('button')

button.forEach(button => {

    button.addEventListener('click', () => {

        if(button == communityButton)
            window.open('../views/safe-delivery.html', '_self')
        
        if(button == deliveryButton) 
            window.open('../views/buy-&-sell-tools.html', '_self')
     
        if(button.textContent == 'Skip')
            window.open('../views/buy-&-sell-tools.html', '_self')

        if(button == toolsButton)
            window.open('../index.html', '_self')
              
    })
})
