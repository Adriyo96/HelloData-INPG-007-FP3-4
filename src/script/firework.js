const area = document.querySelector('#firework');

const firework = () => {
    area.classList.toggle('firework')
    
    setTimeout( done = () => {area.classList.toggle('firework')}, 4000);
}