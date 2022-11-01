const yourActivity = async () => {
  const response = await fetch(`http://www.boredapi.com/api/activity/`)
  const data = await response.json()
  console.log(data);
  document.getElementById('atividade').innerText = data.activity;
 }