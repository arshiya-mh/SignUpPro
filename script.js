const form=document.querySelector("form"),
        nextbt=form.querySelector('.nextbt'),
        backbt=form.querySelector(".backbt"),
        allinputs=form.querySelectorAll('.first input')
nextbt.addEventListener('click', ()=>{
    allinputs.forEach(input => {
        if(input.value !=""){
                form.classList.add('seactive');
        }else{
            form.classList.remove('seactive');
            // alert('input is empty ')
        }
    })

})
backbt.addEventListener('click' , ()=> {
    form.classList.remove('seactive');  
})
let toastbox=document.querySelector('#toastbox');
let successmsg= ' <i class="fa-solid fa-circle-check"></i>successfully submit  ';
let errormsg= ' <i class="fa-solid fa-angles-left"></i>  GO BACK  ';
let invaildmsg= '  <i class="fa-solid fa-angles-right"></i> GO NEXT ';
function showtoast(msg){
    let toast= document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastbox.appendChild(toast);
    
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('nothing')){
        toast.classList.add('invaild');
    }
    setTimeout(() => {
        toast.remove();
    }, 5000);
}
