function vnimanie(){
    alert('!!!Чтобы стать граммотнее надо проходить тесты каждый день!!!')
}
setTimeout(20*60*1000,vnimanie)
let btn = document.querySelector('#btn_otdel')
btn.addEventListener('click',function(){
    window.location.href = 'test.html'
})
btn.addEventListener('mouseover',function(){
    btn.style.backgroundColor = '#555';
    btn.style.color = '#fff';
    btn.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)'
})
btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor = '#B7FFE1'
    btn.style.color = 'black'
    btn.style.boxShadow = '0px 0px 0px'
})
