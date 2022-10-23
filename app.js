$('.submit').click(function(){
$('#loan-form').hide(200);

})
$('.goback').click(function(){
    $(this).hide(200);
    $('#loan-form').show(200);
    $('#results').hide(200);
})
document.querySelector('input.goback').style.display ='none';
document.getElementById('loan-form').addEventListener('submit',function(e){
    //hide the results
    document.getElementById('results').style.display="none";
    //show loader
    document.getElementById('loading').style.display="block";

    setTimeout(calculateresult,2000);
    e.preventDefault();
});
function calculateresult(){
let bmi =null;
// fetch input fields  and results
let height = parseInt(document.querySelector('input#height.form-control').value);
let weight = parseInt(document.querySelector('input#weight.form-control').value);
// let age = parseInt(document.querySelector('input#age.form-control').value);
//parseInt- convert string to number
// height weight min,max
let bmindex=document.querySelector('input#bmi-index.form-control');
let status=document.querySelector('input#status.form-control');
let tipsadv=document.querySelector('input#tips.form-control');
// options
let heightoption = document.querySelector('select#select-height');
let weightoption = document.querySelector('select#select-weight');
// calculating bmi
// bmi imperial system

if(heightoption.value == "inches" && weightoption.value == "lbs" ){
     
    bmi = 703 * (weight / (height * height));    
}
//bmi metric system
else if(heightoption.value == "cm" && weightoption.value == "kgs"){
    height = height / 100;    
    bmi = weight / (height * height);
}    
else{
    notationerror('Please make sure that you have given the correct unit');
    document.getElementById('results').style.display="none";
}

// ROUND OFF
bmi = Math.round(bmi * 100) / 100;
bmindex.value=bmi;
if(bmindex.value== 0){
    bmindex.value ='';
}
//status
if(bmi>=1 && bmi<=18.5){
    status.value='Underweight'
}
else if(bmi>=18.5 && bmi<=24.9){
    status.value='Healthyweight';
}
else if(bmi>=25 && bmi<=29.9){
    status.value='Overweight';
}
else if(bmi>29.9){
    status.value='Obese';
}
else{
    status.value ='';
}
// display the results
//hide form
//show the results
document.getElementById('results').style.display="block";
document.querySelector('input.goback').style.display ='block';
//hide the results 
document.getElementById('loading').style.display="none";

}
function notationerror(error) {
    //create element
    const errordiv = document.createElement("div");
    errordiv.className='alert';
    errordiv.style.backgroundColor='#ffcccb';//light red
    errordiv.appendChild(document.createTextNode(error));

    // document.querySelector('#status').value='Error';
    // document.querySelector('#bmi-index').value='Error';
    // document.querySelector('#status').style.textAlign='center';
    // document.querySelector('#bmi-index').style.textAlign='center';
    //fetch referenced elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    //inserting error message above heading
    card.insertBefore(errordiv,heading);
    // timing out the error message
    setTimeout(errortimeout, 3000);
    function errortimeout(element){
        document.querySelector(".alert").remove();
    }
}



