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
    btn_orpho.style.transition = "background-color 1s ease";
    btn_orpho.style.transform = "rotate(1deg)";
})
btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.style.boxShadow = '';
})
let btn_orpho = document.querySelector('#btn_orpho')
btn_orpho.addEventListener('click',function(){
    window.location.href = 'start_test.html';
})
btn_orpho.addEventListener('mouseover',function(){
    btn_orpho.style.backgroundColor = 'black';
    btn_orpho.style.color = 'white';
    btn_orpho.style.transition = "background-color 2s ease";
    btn_orpho.style.transform = "rotate(1deg)";
})
btn_orpho.addEventListener('mouseout',function(){
    btn_orpho.style.backgroundColor = ''
    btn_orpho.style.color = ''
    btn_orpho.style.transform = ''
    btn_orpho.style.transition = ''
})