const Hello = document.getElementById('hello');

if (localStorage.getItem('Hello')==null)
    localStorage.setItem('Hello', hello.innerHTML);
else
    {
        let helloTxt = localStorage.getItem('Hello').concat('o');
        Hello.innerHTML = helloTxt;
        localStorage.setItem('Hello', helloTxt);
    }

Hello.addEventListener('click', ()=>{
    Hello.innerHTML='Hello';
    localStorage.setItem('Hello', Hello.innerHTML);
})