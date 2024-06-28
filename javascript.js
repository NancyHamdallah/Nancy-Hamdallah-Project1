
let searchBar = document.querySelector('body > main > div > div.center-search > div.search-bar > div.search-bar-text-input > input');

fetch('topics.json')
.then(response =>{
    console.log(response);
    
    return response.json();
})
.then(json=>{

        searchBar.addEventListener("keydown", (e) => {
            if (e.key == "Enter" && searchBar.value != "") {
                console.log(searchBar.value)
                let searchValue = searchBar.value;
                searchForCategory(searchValue,json);
            }
        })

        searchBar.addEventListener("input", (e)=>{
            const cards = document.querySelector('.Cards');
            let card = document.querySelector('.card')
            let result = document.querySelector('.result')
            
            if (searchBar.value ==""){
                console.log("empty searchbar")
                result.innerHTML=""
                let child = cards.lastElementChild;  
            
                    
                    
            while (child) { 
            cards.removeChild(child); 
            child = cards.lastElementChild; 
            }


            }
        })
        let count = 0;
        const cards = document.querySelector('.Cards');
    for(let i=0;i<json.length;i++){
        let result = json[i].category;
        
            // create cards and put json data inside

        let jsonImgSrc = json[i].image;
        let cardEle = document.createElement('div');
        cardEle.classList.add('card');
        cardEle.setAttribute('id',json[i].id)
        cardEle.setAttribute('onclick','detailsCard(id)');
        cards.appendChild(cardEle);
        
        //create image
        const img = document.createElement('img');
        img.classList.add('image-card');
        img.src = './assets/'+jsonImgSrc;
        cardEle.appendChild(img);

        //create new div for description
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        cardEle.appendChild(cardDescription);

        // create new elements in cardDescription Div

        const h5Card = document.createElement('h5');
        h5Card.innerHTML = json[i].category;
        cardDescription.appendChild(h5Card);

        const h4Card = document.createElement('h4');
        h4Card.innerHTML = json[i].topic;
        cardDescription.appendChild(h4Card);

        for(let j=1;j<=5;j++){
            const star = document.createElement('ion-icon');
            star.classList.add('star');
            console.log(json[i].rating)
            if(  json[i].rating > j ){
                star.name = 'star' 
            }else if(json[i].rating >= j-0.5){
                    star.name = 'star-half-outline';
            }
            else {
                star.name = 'star-outline';
            }
            cardDescription.appendChild(star);
        }


        const author = document.createElement('p');
        author.innerHTML = 'Author: ' + json[i].name;


        cardDescription.appendChild(author);
                    count++;
                
            }
            document.querySelector('.result').innerHTML = ' \" ' + count + ' \"' + ' Topics Found'
            console.log(count)

        
    


})

function searchForCategory(searchValue,json){
    let count = 0;
    const cards = document.querySelector('.Cards');
    for(let i=0;i<json.length;i++){
        let result = json[i].category;
        if (result.includes(searchValue)){
            // create cards and put json data inside

        let jsonImgSrc = json[i].image;
        let cardEle = document.createElement('div');
        cardEle.classList.add('card');
        cardEle.setAttribute('id',json[i].id)
        cardEle.setAttribute('onclick','detailsCard(id)');
        cards.appendChild(cardEle);
        
        //create image
        const img = document.createElement('img');
        img.classList.add('image-card');
        img.src = './assets/'+jsonImgSrc;
        cardEle.appendChild(img);

        //create new div for description
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        cardEle.appendChild(cardDescription);

        // create new elements in cardDescription Div

        const h5Card = document.createElement('h5');
        h5Card.innerHTML = json[i].category;
        cardDescription.appendChild(h5Card);

        const h4Card = document.createElement('h4');
        h4Card.innerHTML = json[i].topic;
        cardDescription.appendChild(h4Card);

        for(let j=1;j<=5;j++){
            const star = document.createElement('ion-icon');
            star.classList.add('star');
            console.log(json[i].rating)
            if(  json[i].rating > j ){
                star.name = 'star' 
            }else if(json[i].rating >= j-0.5){
                    star.name = 'star-half-outline';
            }
            else {
                star.name = 'star-outline';
            }
            cardDescription.appendChild(star);
        }


        const author = document.createElement('p');
        author.innerHTML = 'Author: ' + json[i].name;


        cardDescription.appendChild(author);
                    count++;
                }
            }
            document.querySelector('.result').innerHTML = ' \" ' + count + ' \"' + ' Topics Found'
            console.log(count)
}

function detailsCard(id){
    console.log("Hello")
    console.log(id)
    localStorage.setItem("id", id);
    window.open('details.html', '_blank');

}


    
