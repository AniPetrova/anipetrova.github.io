
 let page1 = `
 <div class="page-1">
 <img src="./images/mirrored-removebg-preview (2).png" alt="">
 <section class="us">
   <h2>Ние,</h2>
   <h2>Петя Лазарова & Деян Велев,</h2>
 </section>
 <section class="mainInvite">      
   <p class="inviteText">Заедно с нашите родители,</p>
   <p class="inviteText">с удоволствие Ви каним</p>
   <p class="inviteText">да бъдете гости на нашия</p>
   <p class="inviteText"> специален сватбен ден,</p>
   <p class="inviteText">на 24ти юли 2022г!</p>          
 </section>
 <section class="gergovi">
   <p class="anibobi">Кумуват ни</p>
   <p class="anibobi">Антоанета и Борислав</p>
   <p class="anibobi">Гергови.</p>
 </section>
</div>`;

let page2 = `
  <div class="page-2">
    <img src="./images/mirrored-removebg-preview (2).png" alt="">
    <p class="detailsText2">
      Сватбени камбани<br>
      ще звънят<br>
      и празнични свещи<br>
      ще пламтят<br>
      в 16:30ч в храм <br>
      "Св. Георги Победоносец",<br>
      гр. Балчик.
    </p>

    <a class="mapsLink"
      href=https://www.google.com/maps/place/%D1%86%D1%8A%D1%80%D0%BA%D0%B2%D0%B0+%E2%80%9E%D0%A1%D0%B2.+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC%D1%8A%D1%87%D0%B5%D0%BD%D0%B8%D0%BA+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8+%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%BE%D0%BD%D0%BE%D1%81%D0%B5%D1%86%E2%80%9C/@43.416763,28.1597582,14.75z/data=!4m9!1m2!2m1!1scyrkvi!3m5!1s0x40a4e4812de2833b:0x219bc02003ca30bb!8m2!3d43.4082293!4d28.1650143!15sCgzRhtGK0YDQutCy0LhaDiIM0YbRitGA0LrQstC4kgEPb3J0aG9kb3hfY2h1cmNomgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJOTFZwMlIwTlJFQUU>Покажи
      на картата</a>
  </div>`

let page3 = `
  <div class="page-3">
    <img src="./images/mirrored-removebg-preview (2).png" alt="">
    <p class="detailsText3">
      Там,<br>
      където красивото небе среща<br>
      приказно синьото море,<br>
      ръка за ръка ще си кажем<br>
      най-романтичното ни "Да". </p>
      <p class="detailsText3 newrow">На коктейл се насладете<br>
    и наздравици вдигнете!</p>
    <p class="detailsText3 newrow">Заповядайте в "БлекСийРама<br>
    Амфитеатър" от 18:00ч.</p>
    <a class="mapsLink"
    href="https://www.google.com/maps/place/Club+Residence+at+Blacksearama+Golf,+Tabiata+Area,+Road,+E87,+9600+Balchik/@43.4096649,28.2214963,17z/data=!4m6!1m3!3m2!1s0x40a4e38071d91ac1:0xba2bd3aaaee318f4!2sBlackSeaRama+Golf+%26+Villas,+Tabiata+District,+9600+Balchik!3m1!1s0x40a43d062561e71d:0x1542c8bedf323078">
    Покажи на картата
  </a>
</div>`;

let page4 = `
  <div class="page-4">
    <img src="./images/mirrored-removebg-preview (2).png" alt="">
    <p class="detailsText4">
      На празнична вечеря <br>
      от 19:00ч. заповядайте<br>
      и удобните си обувки <br>
      не забравяйте.<br>
      С песни, танци и хора,<br>да се веселим до сутринта.</p>
      <a class="mapsLink"
      href=https://www.google.com/maps/place/Club+Residence+at+Blacksearama+Golf,+Tabiata+Area,+Road,+E87,+9600+Balchik/@43.4096649,28.2214963,17z/data=!4m6!1m3!3m2!1s0x40a4e38071d91ac1:0xba2bd3aaaee318f4!2sBlackSeaRama+Golf+%26+Villas,+Tabiata+District,+9600+Balchik!3m1!1s0x40a43d062561e71d:0x1542c8bedf323078>
      
      Покажи на картата
    </a>
    <p class="molba">
      Учтиво молим да потвърдите присъствието си до<br>15ти април 2022г.
    </p>
  </div>`;

var start = null;
let mainEl = document.querySelector(".main");

window.addEventListener("touchstart",function(event){
  //mainEl.innerHTML=page1;
  if(event.touches.length === 1){
    //just one finger touched
     start = event.touches.item(0).clientX;
   }else{
     //a second finger hit the screen, abort the touch
     start = null;
   }
});

window.addEventListener("touchend",function(event){
  let offset = 50;//at least 100px are a swipe
  
  if(start){
    //the only finger that hit the screen left it
    var end = event.changedTouches.item(0).clientX;

    let mainEl = document.querySelector(".main");
    let activePage = mainEl.children[0].className;
    console.log(activePage);

    if(activePage== "page-1") {
      if(end > start + offset){
        
       mainEl.innerHTML= page4;
      } else if(end < start - offset ) {
        
        mainEl.innerHTML=page2;
      }
    }

    if(activePage== "page-2") {
      if(end > start + offset){
        
       mainEl.innerHTML= page1;
      } else if(end < start - offset ) {
        
        mainEl.innerHTML=page3;
      }
    }

    if(activePage== "page-3") {
      if(end > start + offset){
        
       mainEl.innerHTML= page2;
      } else if(end < start - offset ) {
        
        mainEl.innerHTML=page4;
      }
    }

    if(activePage== "page-4") {
      if(end > start + offset){
        
       mainEl.innerHTML= page3;
      } else if(end < start - offset ) {
        
        mainEl.innerHTML=page1;
      }
    }
    

  }
});