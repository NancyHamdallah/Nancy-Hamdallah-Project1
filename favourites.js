let favorites = JSON.parse(localStorage.getItem('favorites'))
const favouriteToggle = document.querySelector("#favourite-toggle");
const addToFav = document.querySelector("#details-btn-favorites")
let fav = 0;

fetch('./topics.json')
.then(response => {
    return response.json()
})
.then(json =>{



if(favorites != null){
    favorites = JSON.parse(localStorage.getItem('favorites'))
    console.log(favorites)
    for(let i=0;i<favorites.length;i++){


        // build the html elements of Favourite popup dynamically
        let gridCards = document.querySelector('.grid-cards-fav')
        
        let cardFav = document.createElement('div')
        cardFav.classList.add('card-fav')
        gridCards.appendChild(cardFav)

        let cancel = document.createElement('div')
        cancel.classList.add('cancel')
        cancel.setAttribute('id',favorites[i])
        cancel.innerHTML = 'X'
        cancel.setAttribute('onclick','cancelFav(id)')
        
        cardFav.appendChild(cancel)

        let cardFavImg = document.createElement('img')
        cardFavImg.classList.add('card-fav-image')
        cardFavImg.src=  './assets/' + json[favorites[i]-1].image
        cardFav.appendChild(cardFavImg)

        let cardFavDesc = document.createElement('div')
        cardFavDesc.classList.add('card-fav-description')
        cardFav.appendChild(cardFavDesc)

        let cardFavDescH4 = document.createElement('h4')
        cardFavDescH4.innerHTML = json[favorites[i]-1].topic
        cardFavDesc.appendChild(cardFavDescH4)
    }

}


})

const enableFav = () =>{
    document.getElementById("Favourites").style.visibility="visible";
    document.getElementById("heart-icon").name="heart";
    
};

const disableFav = () =>{
    document.getElementById("Favourites").style.visibility="hidden";
    document.getElementById("heart-icon").name="heart-outline";

};


favouriteToggle.addEventListener("click",()=>{

    if(fav==0){
        enableFav();
        fav=1;
    }
    else{
        disableFav();
        fav=0;
    }

});

function cancelFav(cancelledId){
    favorites = JSON.parse(localStorage.getItem('favorites'))
    console.log('id = '+cancelledId)
    console.log('before deletion = ' + favorites)
    const index = favorites.indexOf(cancelledId);
    console.log(index)
        if (index > -1) { // only splice array when item is found
        favorites.splice(index, 1); // 2nd parameter means remove one item only
        console.log('after deletion = ' + favorites)
        localStorage.setItem('favorites', JSON.stringify(favorites));
       location.reload();
       favouriteToggle.click()
       

}
console.log(JSON.parse(localStorage.getItem('favorites')))
}
