

const form = document.querySelector('.form-submit')


form.addEventListener('submit', calculateTime);

if(localStorage.getItem('time')){
    
    futureTime = JSON.parse(localStorage.getItem('time'));
getRemainingTime(futureTime);

}

function calculateTime(){
    const inputDay = document.querySelector('#day').value;
    const inputMonth = document.querySelector('#month').value;
    const inputYear = document.querySelector('#year').value;
    const birthDetails = document.querySelector('.birth-con');
    const birthComment = document.querySelector('h3');
    
    
        birthDetails.style.display = 'none'
        birthComment.style.display = 'block'
        

        const items = document.querySelectorAll('.deadline-time h4');

         let futureDate = new Date( (inputYear), (inputMonth - 1), (inputDay), 0, 0, 0);
         


        //  const year = futureDate.getFullYear();
        //  const month = futureDate.getMonth()
        //  const weekday = futureDate.getDay();
        //  const hour = futureDate.getHours();
        //  const minute = futureDate.getMinutes();
        //  const seconds = futureDate.getSeconds();
        //  const date = futureDate.getDate();  //this refers to the day of the month

         let futureTime = futureDate.getTime();
        futureTime = localStorage.setItem('time', JSON.stringify(futureTime))
         const today =new Date().getTime();


        getRemainingTime(futureTime)

}



function getRemainingTime(futureTime){

    futureTime = JSON.parse(localStorage.getItem('time'));
    
    const deadLine =document.querySelector('.deadline')

    let items = document.querySelectorAll('.deadline-time h4');
    

    const today =new Date().getTime();
    const t = futureTime - today;
    const days = Math.floor(t/(24*60*60*1000));
    const hours = Math.floor((t % (24*60*60*1000)) / (60*60*1000));
    const minutes = Math.floor ((t % (60*60*1000) / (60*1000)));
    const seconds = Math.floor ((t%(60*1000) / 1000));
        
    const values = [days,hours, minutes, seconds];
        
    // function  format(item){
        // if(item < 10){
            // item = `0${item}`
        // }
        // return item;
    // }
    items.forEach(function(item, index){
      let digit = item.innerHTML = values[index];
      
      if(digit < 10){
        item.innerHTML = `0${values[index]}`;
      }
    });
    if(t < 0){
    
    deadLine.innerHTML = `<h4 class="expired"> Sorry,this birthday has passed</h4><button class="retry" >Try Again</button>`;
    const reTey = document.querySelector('.retry')
    reTey.addEventListener('click', function(){
        location.reload()
    });
    }
        
    startCountDown();
 

    };


    function startCountDown(){
        setInterval(calculateTime, 1000);
       };