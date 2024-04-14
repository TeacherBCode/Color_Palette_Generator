
const colorBtn = document.getElementById('color-btn')
const copy1 = document.getElementById('copy-1') 
const copy2 = document.getElementById('copy-2')
const copy3 = document.getElementById('copy-3')
const copy4 = document.getElementById('copy-4')
const copy5 = document.getElementById('copy-5')


colorBtn.addEventListener('click', function(){
    const seedColor = document.getElementById('seed-color').value.slice(1)
    const schemeMode = document.getElementById('scheme-mode').value
    console.log(seedColor, schemeMode)
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}`)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i< 5; i++){
            document.getElementById(`color-${i+1}`).style.backgroundColor = data.colors[i].hex.value
            document.getElementById(`hex-${i+1}`).textContent = data.colors[i].hex.value
            document.getElementById(`hex-${i+1}`).value = data.colors[i].hex.value
        }

        });
    })
    
copy1.addEventListener('click',function(){
    const copyText = document.getElementById('hex-1').value
    navigator.clipboard.writeText(copyText);
});
copy2.addEventListener('click',function(){
    const copyText = document.getElementById('hex-2').value
    navigator.clipboard.writeText(copyText);
});
copy3.addEventListener('click',function(){
    const copyText = document.getElementById('hex-3').value
    navigator.clipboard.writeText(copyText);
});
copy4.addEventListener('click',function(){
    const copyText = document.getElementById('hex-4').value
    navigator.clipboard.writeText(copyText);
});
copy5.addEventListener('click',function(){
    const copyText = document.getElementById('hex-5').value
    navigator.clipboard.writeText(copyText);
});
