

const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message')

const area = document.querySelector('#firework');

const firework = () => {
    area.classList.toggle('firework')
    
    setTimeout( done = () => {area.classList.toggle('firework')}, 9000);
}

const validate = () => {
    let var1 = email.value;
    let var2 = subject.value;
    let var3 = message.value;
    
    if(var1 == "" || var2 =="" || var3 == ""){
        alert("Please Complete the form");
        return false;
    } 
    else {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  
        let value = var1.match(pattern); 
        if(value != null){
            return true
        }
        alert('Invalid Email Address')
        return false;
    }
}


  const bundle = () => {
    if (validate() == true) {
        firework();
        alert('Message Sent')
    } 
  }

