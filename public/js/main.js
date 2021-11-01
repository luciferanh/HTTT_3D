$(document).ready(function(){
  
   $("#mySubmit").click(function(){
 
       value=$("#myInput").val();
       
       $(".List_DS").prepend("<li>"+value+"</li>");
   });
 
 });