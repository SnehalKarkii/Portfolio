
const bars = document.querySelector(".bars");
const times = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const progress_bar = document.querySelectorAll(".progress-bar");

bars.onclick = () =>{
    mobileNav.style.left ="0";
}

times.onclick = () =>{
    mobileNav.style.left ="-100%";
}


//Displaying the timeline percentage 

progress_bar.forEach((bar)=>{
    let percent = bar.dataset.percent;
    let display_percent = bar.children[0];
    display_percent.innerText = percent + "%";
    bar.style.width = percent + "%";

});

// Prelaoder
setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1500);

// Form submission
function submitForm(){
    var submission = document.querySelectorAll("input");
    var text =document.querySelector("textarea");
    setTimeout(()=>{
        submission.forEach(input => input.value ='');
        text.value="";

    },2000);
    
}