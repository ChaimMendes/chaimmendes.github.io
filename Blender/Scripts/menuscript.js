document.addEventListener("DOMContentLoaded", function(){
    const menu_button = document.getElementById("menu-button");
    const menu_container = document.getElementById("NavContainer");
    const close_button = document.getElementById("close-button");

    if (menu_button && menu_container){
        menu_button.addEventListener("click", function() {
            menu_container.classList.add("menuOpen")
        })
    }

    if (close_button && menu_container){
        close_button.addEventListener("click", function() {
            menu_container.classList.remove("menuOpen")
        })
    }
});