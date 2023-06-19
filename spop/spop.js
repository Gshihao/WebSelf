 /*
   @module spop;
   @author SHAO 
   @version α1.1.1.1 2023/6/19 15:54
   @copyright: SHAO
*/
   (function (){
      let Ret='<div class="AlertOverride_a" id="AlertOverridea"><div class="AlertContenxt"><div class="AlertContenxtCon">';
          Ret+=' <p id="cuowuAlertOverridea"></p></div><div class="AlertContenxtConddjjd"><button class="AlertContenxtBon" onclick="" id="dkdkjdjfjjfjfjf">确定</button></div>';
          Ret+='</div></div>';
          document.body.innerHTML+=Ret;
    }())
    let spop=(context)=>{
       document.getElementById("AlertOverridea").style.display="block";
       document.getElementById("cuowuAlertOverridea").innerText=context;
      
       document.getElementById("dkdkjdjfjjfjfjf").onclick=function (){
         document.getElementById("AlertOverridea").style.display="none";
       }
      }