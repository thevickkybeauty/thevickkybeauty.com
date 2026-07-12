function message(){
    alert("Bienvenue chez TheVickkyBeauty ✨");
}
// Message du bouton principal
function message() {
    alert("Bienvenue dans l'univers TheVickkyBeauty ✨");
}

// Mode sombre
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // Sauvegarde le choix
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Au chargement de la page
window.onload = function(){
    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark");
    }
};
