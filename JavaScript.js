
// show container button
document.getElementById('transfer_btn').addEventListener('click', function() {
  var container = document.getElementById('transfer_container');
  if (container.style.display === 'none' || container.style.display === '') {
      container.style.display = 'flex';
  } else {
      container.style.display = 'none';
  }
});


document.getElementById('tb').addEventListener('click' , function()
{
  var gif = document.querySelector('.gif');
  if(gif.style.display ==='none'|| gif.style.display === '') 
    {
        gif.style.display = 'block';
        setTimeout(function() {
          gif.style.display = 'none';
        }, 4000);
        setTimeout(() => {
          alert("Money Transfered")
        }, 3500);
    } else 
    {
      gif.style.display = 'none';
    }
});
