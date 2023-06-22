const getbyid=(id,str)=>{
    document.getElementById(id).style.animation=str;
}

const anm_clr=(id)=>{
    setTimeout(() => {
      getbyid(id,"")
    }, 2300);
}
var flag=true
document.getElementById("btn").addEventListener("click",()=>{
    if(flag==true){
        getbyid("entbarid1","scale-up-hor-center 1.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) both")
        setTimeout(() => {
            getbyid("celestialid","bounce-in-top 0.6s both")
        }, 800);
        setTimeout(() => {
            getbyid("celestialid","slide-out-fwd-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both")
        }, 1800);
        anm_clr("entbarid1")
        flag=false;
    }
    else{
        getbyid("celestialid","slide-in-fwd-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both")
        setTimeout(() => {
            getbyid("celestialid","bounce-out-bottom 1.5s both")
        }, 500);
        flag=true;
    }
   
   
})