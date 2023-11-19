function showHomepageImage(){
    const images = ['jeep.png', 'cesar.png','kia.png'];
    let currentIndex = 0;
    const topSection = document.getElementById('topSection');
     function changeBackgroundImage() {
          topSection.style.backgroundImage = `url('../assets/images/${images[currentIndex]}')`;
          currentIndex = (currentIndex + 1) % images.length;
           }

        setInterval(changeBackgroundImage, 3000); 
}

function dark_light_mode(){
    let button=document.getElementById("switch");
    var fieldset=document.getElementById("fieldset");
    var body=document.body;
    if(body.className=="dark"){

        body.classList="light";
        button.textContent="light";
        button.classList="btn btn-outline-light";
        fieldset.classList="centered-fieldset-dark container"
    }
    else{
        body.classList="dark";
        button.textContent="dark";
        button.classList="btn btn-outline-dark";
        fieldset.classList="centered-fieldset container"
    }
}