let id = localStorage.getItem("id")
// get myFavorites from local storage or empty array
let myFav = JSON.parse(localStorage.getItem("favorites")) || [];
console.log('we are in id = ' + id);
fetch('topics.json')
.then(response => {
    return response.json()
})
.then(json=>{
    let jsonImgSrc = json[id-1].image
    const main = document.querySelector('.main')
    let topicCard = document.createElement('div')
    topicCard.classList.add('topic-card')
    main.appendChild(topicCard)
    let newDiv = document.createElement('div')
    newDiv.classList.add('interested-card')
    topicCard.appendChild(newDiv)
    
    let detailsImg = document.createElement('img')
    detailsImg.classList.add('details-image-card')
    detailsImg.src= './assets/' + jsonImgSrc
    newDiv.appendChild(detailsImg)

    let cardDesc = document.createElement('div')
    cardDesc.classList.add('card-description')
    newDiv.appendChild(cardDesc)

    let paragraph = document.createElement('p')
    cardDesc.appendChild(paragraph)

    let spanBold = document.createElement('span')
    spanBold.classList.add('bold')
    spanBold.innerHTML = json[id-1].topic

    paragraph.appendChild(spanBold)
    paragraph.innerHTML = paragraph.innerHTML + ' by ' 

    let anchAuthor = document.createElement('a')
    anchAuthor.href = '#'
    anchAuthor.innerHTML = json[id-1].name

    paragraph.appendChild(anchAuthor)

    let interested = document.createElement('div')
    interested.classList.add('card-details-interested')
    newDiv.appendChild(interested)

    let parInterested = document.createElement('p')
    parInterested.innerHTML = 'Interested about this topic?'
    interested.appendChild(parInterested)

    let btnInterested = document.createElement('button')
    btnInterested.classList.add('details-btn-favorites')
    btnInterested.setAttribute('id',id)
    btnInterested.setAttribute('onclick','AddToFavourite(id)');
    btnInterested.innerHTML = 'Add to Favourites'
    interested.appendChild(btnInterested)

    let btnIcon = document.createElement('ion-icon')
    btnIcon.name = 'heart-outline'
    btnIcon.classList.add('heart-fav-details')
    btnInterested.appendChild(btnIcon)

    let btnPara = document.createElement('p')
    btnPara.classList.add('unlimited')
    btnPara.innerHTML = 'Unlimited Credits'
    btnInterested.appendChild(btnPara)

    let description = document.createElement('div')
    description.classList.add('description')
    main.appendChild(description)

    let descContent = document.createElement('div')
    descContent.classList.add('description-content')
    description.appendChild(descContent)

    let detailsHead = document.createElement('div')
    detailsHead.classList.add('details-head')
    descContent.appendChild(detailsHead)

    let detailsHeadH3 = document.createElement('h3')
    detailsHeadH3.innerHTML = json[id-1].category
    detailsHead.appendChild(detailsHeadH3)

    
    let detailsCourse = document.createElement('div')
    detailsCourse.classList.add('details-course')
    descContent.appendChild(detailsCourse)

    let detailsCourseH1 = document.createElement('h1')
    detailsCourseH1.innerHTML = json[id-1].topic
    detailsCourse.appendChild(detailsCourseH1)

    for(let j=1;j<=5;j++){
        const star = document.createElement('ion-icon');
        star.classList.add('star');
        if(  json[id-1].rating > j ){
            star.name = 'star' 
        }else if(json[id-1].rating >= j-0.5){
                star.name = 'star-half-outline';
        }
        else {
            star.name = 'star-outline';
        }
        detailsCourse.appendChild(star);
    }


    let detailsContent = document.createElement('div')
    detailsContent.classList.add('details-content')
    detailsContent.innerHTML = json[id-1].description
    detailsCourse.appendChild(detailsContent)


    let topics = document.createElement('div')
    topics.classList.add('Topics')
    main.appendChild(topics)

    let topicsHead = document.createElement('div')
    topicsHead.classList.add('grid-box')
    topics.appendChild(topicsHead)

    let topicsHead1 = document.createElement('h1')
    topicsHead1.innerHTML = json[id-1].topic + ' Sub Topics'
    topicsHead.appendChild(topicsHead1)

    let subtopics = json[id-1].subtopics
    for(let i=0;i<subtopics.length;i++){
        let subtopicsPoints = document.createElement('div')
        subtopicsPoints.classList.add('grid-box')
        let subtopicsCheckMark = document.createElement('ion-icon')
        subtopicsCheckMark.name = 'checkmark-circle-outline'
        subtopicsCheckMark.classList.add ('icon-color')
        subtopicsPoints.appendChild(subtopicsCheckMark)
        let subSpan = document.createElement('span')
        subSpan.innerHTML = ' ' + json[id-1].subtopics[i]
        subtopicsPoints.appendChild (subSpan)
        
        topics.appendChild(subtopicsPoints)

    }

    
})

function AddToFavourite(id){
    
    document.querySelector('.heart-fav-details').name="heart";
    console.log('we are adding id='+id)
    if(myFav.indexOf(id)<0){
    myFav.push(id)
    console.log(myFav)
    localStorage.setItem('favorites', JSON.stringify(myFav));
    deleteAllFav()
    apiCall()
    }
    /*
    else{
        document.querySelector('.heart-fav-details').name="heart-outline";
        const index = myFav.indexOf(id);
        console.log('We are in index' + index)
        if (index > -1) { // only splice array when item is found
        myFav.splice(index, 1); // 2nd parameter means remove one item only
        localStorage.setItem('favorites', JSON.stringify(myFav));
        }
        */
    
    
}
