console.log('Feito por Fernando Lopes, minha versão do relógio do Javascript 30 challenge DIO');

  function setDate(){
    const hourBox = document.getElementsByClassName('hour');
    const minuteBox = document.getElementsByClassName('minute');
    const secondBox = document.getElementsByClassName('second'); 

    const now = new Date();
    const hours = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    hourBox[0].innerHTML = hours;
    minuteBox[0].innerHTML = minute;
    secondBox[0].innerHTML = seconds;
  }

  setInterval(setDate, 1000);