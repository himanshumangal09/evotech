var latitude ='' , longitude ='';
var value=document.getElementById('locationbutton');
document.getElementById('locationbutton').addEventListener('click',()=>{
    console.log('button is clicked')
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
        }
navigator.geolocation.getCurrentPosition((position) => {
latitude=position.coords.latitude,
longitude=position.coords.longitude
alert('location shared');
//alert(`https://google.com/maps?q=${latitude},${longitude}`)
// document.getElementById('locationurll').innerHTML="CLICK TO GET LOCATION";
//document.getElementById('locationbuttonn').addEventListener('click',()=>{
//document.querySelector('input').value="https://google.com/maps?q=28.6755554,77.11283089999999" ;
    })
    })
// if(latitude!=''&&longitude!='')
// {
// document.querySelector('input').value="https://google.com/maps?q=28.6755554,77.11283089999999" ;
// }
    
        