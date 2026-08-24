
const videos = document.querySelectorAll(".video-card video");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        const video = entry.target;


        if(entry.isIntersecting){

            video.play();

        } else {

            video.pause();
            video.currentTime = 0;

        }

    });


},{

    threshold:0.7

});


videos.forEach(video=>{

    observer.observe(video);

});

const soundButtons = document.querySelectorAll(".sound-btn");


soundButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        const video = button.parentElement.querySelector("video");


        if(video.muted){

            video.muted = false;

          button.classList.add("active");

          
button.querySelector("img").src="icons/volume-on.svg";

        }else{

            video.muted = true;

          button.classList.remove("active");
          
button.querySelector("img").src="icons/volume-off.svg";

        }


    });


});

const cards = document.querySelectorAll(".video-card");


const cardObserver = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active-card");


}else{

entry.target.classList.remove("active-card");

}


});


},{
threshold:.7
});


cards.forEach(card=>{

cardObserver.observe(card);

});

const photos = document.querySelectorAll(".photo-card");


const photoObserver = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active-photo");


}else{

entry.target.classList.remove("active-photo");

}


});


},{
threshold:.7
});


photos.forEach(photo=>{

photoObserver.observe(photo);

});


const portfolioBtn =
document.getElementById("portfolioBtn");


const portfolioPopup =
document.getElementById("portfolioPopup");


const videoBtn =
document.getElementById("videoBtn");


const photoBtn =
document.getElementById("photoBtn");

const closePopup =
document.getElementById("closePopup");


if(closePopup){

closePopup.addEventListener("click",()=>{

portfolioPopup.style.display="none";

});

}


if(portfolioPopup){

portfolioPopup.addEventListener("click",(e)=>{

    if(e.target === portfolioPopup){

        portfolioPopup.style.display="none";

    }

});

}

if(videoBtn){

videoBtn.addEventListener("click",()=>{

document.querySelector(".videos")
.scrollIntoView({
behavior:"smooth"
});

portfolioPopup.style.display="none";

});

    }



if(portfolioBtn){

portfolioBtn.addEventListener("click",()=>{

portfolioPopup.style.display="flex";

});

}






if(photoBtn){

photoBtn.onclick=function(){

    document
    .querySelector(".gallery")
    .scrollIntoView({
        behavior:"smooth"
    });


    portfolioPopup.style.display="none";

};

}



console.log("script loaded");


const reveals =
document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


    reveals.forEach((element)=>{


        const windowHeight =
        window.innerHeight;


        const elementTop =
        element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }


    });


});


console.log("script loaded");


