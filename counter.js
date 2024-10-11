let val=document.getElementById("value"); //to access the 'value' div
let plus=document.getElementById("plus");  //to access the 'plus' button
let minus=document.getElementById("minus"); //to access the 'minus' button
plus.addEventListener("click",function(){
    let num=parseInt(val.textContent); //It will access the current displayed content of 'val' div{i.e written in between the tag} in the form of String
    num=num+1;  //parseInt() will be used to convert string into number.
    val.textContent=num; //to update the content.
})
minus.addEventListener("click",function(){
    let num=parseInt(val.textContent);
    num=num-1;
    val.textContent=num;
})

// you can also use onclick attribute of button tag in which functions are called directly which increases/decreases the value,then you dont need to use addEventListener() method.