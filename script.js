let main = document.getElementById('main');
let btn = document.getElementById('btn');
let inp = document.getElementById('inp');

btn.addEventListener('click',()=>{
    let btnValue = inp.value.trim().toLowerCase();
    if(btnValue !== ''){
        main.style.background = btnValue;
    }else{
        alert('input field is empty!!')
    }
})
