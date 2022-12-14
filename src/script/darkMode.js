const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark"){
    document.body.classList.toggle('dark-theme');
    document.querySelector('#darkmode-toggle').checked = true;
}

const darkmode = () => {
    document.body.classList.toggle('dark-theme');
    
    let theme = "light";

    if(document.body.classList.contains('dark-theme')){
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
}