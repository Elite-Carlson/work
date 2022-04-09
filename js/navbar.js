const mbtnlanguages = document.querySelector(".m-btn-languages");
    const mbtnonline = document.querySelector(".m-btn-online");
    const mbtnadults = document.querySelector(".m-btn-adults");
    const mbtnkidsandteens = document.querySelector(".m-btn-kidsandteens");
    const mbtncorporations = document.querySelector(".m-btn-corporations");

    const dropdownlanguages = document.querySelector(".m-languages");
    const dropdownonline = document.querySelector(".m-online");
    const dropdownadults = document.querySelector(".m-adults");
    const dropdownkidsandteens = document.querySelector(".m-kidsandteens");
    const dropdowncorporations = document.querySelector(".m-corporations");
    
    const menu = document.querySelector(".menu");
    const mobilenavbar = document.querySelector(".mobilenavbar");
    const scrollgif = document.querySelector(".scroll");

    function showmobilenavbar(){
        if (mobilenavbar.style.display === "block") {
            mobilenavbar.style.display = "none";
            dropdownlanguages.style.display = "none";
            dropdownonline.style.display = "none";
            dropdownadults.style.display = "none";
            dropdownkidsandteens.style.display = "none";
            dropdowncorporations.style.display = "none";
            scrollgif.style.display = "block";
        } else {
            mobilenavbar.style.display = "block";
            scrollgif.style.display = "none"
        }
        if(menu.src == "http://127.0.0.1:5500/img/menu.png"){
            menu.src = "http://127.0.0.1:5500/img/close.png";
            //console.log("true");
        }else{
            menu.src = "http://127.0.0.1:5500/img/menu.png";
            //console.log(menu.src);
        }
    }
    function dropdownone(){
        if (dropdownlanguages.style.display === "block") {
            dropdownlanguages.style.display = "none";
        } else {
            dropdownlanguages.style.display = "block";
        }
    }

    function dropdowntwo(){
        if (dropdownonline.style.display === "block") {
            dropdownonline.style.display = "none";
        } else {
            dropdownonline.style.display = "block";
        }
    }

    function dropdownthree(){
        if (dropdownadults.style.display === "block") {
            dropdownadults.style.display = "none";
        } else {
            dropdownadults.style.display = "block";
        }
    }

    function dropdownfour(){
        if (dropdownkidsandteens.style.display === "block") {
            dropdownkidsandteens.style.display = "none";
        } else {
            dropdownkidsandteens.style.display = "block";
        }
    }

    function dropdownfive(){
        if (dropdowncorporations.style.display === "block") {
            dropdowncorporations.style.display = "none";
        } else {
            dropdowncorporations.style.display = "block";
        }
    }
    mbtnlanguages.addEventListener("click", dropdownone);
    mbtnonline.addEventListener("click", dropdowntwo);
    mbtnadults.addEventListener("click", dropdownthree);
    mbtnkidsandteens.addEventListener("click", dropdownfour);
    mbtncorporations.addEventListener("click", dropdownfive);
    menu.addEventListener("click", showmobilenavbar);