const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')
const button = document.getElementById('replay-btn')


 
shuffleImage()
clicking()
function shuffleImage(){

    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){


        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}

function match(cardOne , cardTwo){
    
    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')        
        
    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
    
    if(score.innerHTML >= 6){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'YOU WON!',
            showConfirmButton: true
        })
    }
}

function replay(){
    shuffleImage();
    for(let i =0; i<card.length; i++){
        front[i].classList.remove('match')
    }
    score.innerHTML = 0;
}
// Loading Screen

document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex"; // Show the loading screen

    setTimeout(function() {
      loadingScreen.style.display = "none"; // Hide the loading screen after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
  });
