 /*
   @module spop;
   @author SHAO 
   @version α1.1.1.1 2023/6/19 15:54
   @copyright: SHAO
*/
   (function (){
         let Html1a='	<div class="choiceBox" id="choiceBoxA" ><div class="choiceXBox" ><div class="choiceXBox_F2">';
             Html1a+=' <div class="choiceBox_box11" onclick="CloseBottom()"></div><!-- 内容--><div class="choiceBox_box12" id="choiceBoxboxid">';
             Html1a+='</div><div class="choiceBox_box12Top"></div><!--页面数据展示顶部遮罩层--><div class="choiceBox_box12Botyom">';
             Html1a+='</div><!--页面数据展示顶部遮罩层--></div></div></div> ';
         document.body.innerHTML+=Html1a;
      }());// 动态对html进行注入框架
       var spop=(context)=>{
                 let choiceBoxA= document.getElementById("choiceBoxA");
                  choiceBoxA.style.display="block";
                  choiceBoxA.style.animation="showtop 0.5s forwards";
                  document.getElementById("choiceBoxboxid").innerHTML=context;
                 };
        var CloseBottom=()=>{
                 let choiceBoxA= document.getElementById("choiceBoxA");
                 choiceBoxA.style.animation="CloseBottom 1s forwards";
        }
