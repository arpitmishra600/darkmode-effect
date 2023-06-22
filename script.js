// const getbyid=(str,callback)=>{
//     document.getElementById(str).onclick(()=>{
//         callback()
//     })
// }

const anm_clr=(id)=>{
    setTimeout(() => {
      document.getElementById(id).style.animation=""
    }, 1500);
}
var flag=true
document.getElementById("btn").addEventListener("click",()=>{
    if(flag==true){
        document.getElementById("entbarid1").style.animation="scale-up-hor-center 1.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) both"
        anm_clr("entbarid1")
        flag=false;
    }
    else{
        document.getElementById("entbarid2").style.animation="scale-up-hor-center 1.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) both"
        anm_clr("entbarid2")
        flag=true;
    }
   
   
})