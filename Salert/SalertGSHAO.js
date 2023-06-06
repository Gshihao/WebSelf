/*
   @module salert;
   @author SHAO 
   @param {text} context 传入要显示的文本
   @return {Boolean} true为点击确定 false为点击取消
   @version α1.1.1.1 2023/6/6 21:48
   使用方法:
   引入本文件 ， 直接调用salert(context)方法，传入要提示的文本
   还要引入css 文件
   @copyright: SHAO
*/
(function (){
          let AslertaCon='<div id="AZWebSalertRough" class="AZWeb_Salert_Rough"><div class="Salert_popLayer">';
              AslertaCon+='<div class="Salert_Hint_Context"><span id="SalertContextA"></span>';
              AslertaCon+='</div><div class="Salert_fun_adj"><table><tr>';
              AslertaCon+='<td id="AslertaConQuxiao">取消</td><td id="AslertaConQuedihg">确定</td>';
              AslertaCon+= '</tr></table></div></div></div>';
              document.body.innerHTML+=AslertaCon;
        }())
        async function salert(context){
            const result = await contextAlertyui(context);
             return result;
           }
        async function contextAlertyui(contxt) {
          document.getElementById("SalertContextA").innerText = contxt;
          let Rough = document.getElementById("AZWebSalertRough");
          Rough.style.display = "block";
          document.body.style.overflow="hidden";
          document.body
          return new Promise(resolve => {
             let Bu1=document.getElementById("AslertaConQuedihg");
             Bu1.addEventListener('click',function(e){
              Rough.style.display="none";
              resolve(true);
              document.body.style.overflow=""; // 取消禁止滑动
           })
            let Bu2=document.getElementById("AslertaConQuxiao");
            Bu2.addEventListener('click',function(e){
            Rough.style.display="none";
            resolve(false);  
            document.body.style.overflow=""; // 取消禁止滑动
           })
          });
     }