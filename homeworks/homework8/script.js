function yourActivity(){
    fetch('http://www.boredapi.com/api/activity/')
 .then(res => res.json())
 .then(data => {
   document.getElementById('atividade').innerText = data.activity;
   console.log(data);
 })
 }