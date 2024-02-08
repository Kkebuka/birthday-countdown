const weekDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

const inputDay = document.querySelector('#day').value;
const inputMonth = document.querySelector('#month').value;
const inputYear = document.querySelector('#year').value;
const button = document.querySelector('#submit');

button.addEventListener('click', function(){

    const inputDay = document.querySelector('#day').value;
    const inputMonth = document.querySelector('#month').value;
    const inputYear = document.querySelector('#year').value;
    console.log (inputDay, inputMonth, inputYear)









const deadLine =document.querySelector('.deadline')

const items = document.querySelectorAll('.deadline-time h4');
 let futureDate = new Date( (inputYear), (inputMonth - 1), (inputDay), 0, 0, 0);
 console.log(futureDate);

 const year = futureDate.getFullYear();
 const month = futureDate.getMonth()
 const weekday = futureDate.getDay();
 const hour = futureDate.getHours();
 const minute = futureDate.getMinutes();
 const seconds = futureDate.getSeconds();
 const date = futureDate.getDate();  //this refers to the day of the month

 const futureTime = futureDate.getTime();

 const today =new Date().getTime();

 
 function getRemainingTime(){
    const today =new Date().getTime();
    const t = futureTime - today;
    
    
    const days = Math.floor(t/(24*60*60*1000));
    const hours = Math.floor((t % (24*60*60*1000)) / (60*60*1000));
    const minutes = Math.floor ((t % (60*60*1000) / (60*1000)));
    const seconds = Math.floor ((t%(60*1000) / 1000));

    const values = [days,hours, minutes, seconds];

    function  format(item){
        if(item < 10){
            item = `0${item}`
        }
        return item;
    }
    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countDown);
    
    deadLine.innerHTML = `<h4 class="expired"> Sorry,this birthday has passed</h4><button class="retry">Try Again</button>`;
    const reTey = document.querySelector('.retry')
    reTey.addEventListener('click', function(){
        location.reload()
    });
    }

    };
    let countDown = setInterval(getRemainingTime, 1000);

    
    
    
    
    

    getRemainingTime()


});