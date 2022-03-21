function updateUserView(){
    document.getElementById("app").innerHTML=`  
    ${createHeaderTopHtml()}

${createEkstraPaidSlider()}

${crateSearchHappeningBar()}

${createMultipleChoiceCategory()}

${createFilterButtons()}

${createHappeningList()}

    `;
}



function createHeaderTopHtml(){
    let headerTop=``;
    headerTop+=`
    <header class="fullscreen-header">
    <nav class="nav nav-top">
      <figure class="nav__list">
        <a href="" class="nav__list-item"> Hemsedal-logo</a>
      </figure>
      <ul class="nav__list">
        <li><a class="nav__list-item" href="">Hjem</a></li>
        <li>
          <a class="nav__list-item create-happening-btn " href="#adminPage"
          onclick="model.app.page='admin'; updateView()"
          >
            <span class="icon-plus"> </span>
            <span>Oprett ny happening</span></a>
        </li>
        <li><a class="nav__list-item" href="">Logg in</a></li>
      </ul>
    </nav>
    
    <h1 class="header__title">HVA SKJER I HEMSEDAL!</h1>
 

   
  </header>
    
    `;
    return headerTop;
}

/* getByHappeningPaymentType(model.data.happenings,3); */
function createEkstraPaidSlider(){
    //random picture icindeki ne ile ilgili resmin gelecegini dinamik yapmak icin ? sonraki kisma kategori ismini random bir sekilde getirecegiz....
    let ekstraPaidSlider=``;
    ekstraPaidSlider+=`
    <section class="slider-container">
    <div class="slider-title main-title"><h1>EkstraBetalte Aktiviteter</h1></div>
    <div class="owl-carousel owl-theme"> 
    `;

    let item=``;

    let extraPaidHappenings=getHappeningByPaymentType(model.data.happenings,3);
for(let i=0; i<extraPaidHappenings.length; i++){
    let extraPaidHappening=extraPaidHappenings[i];

    item+=
    `
<div class="item">
<div class="cart-image"

style="
background-image: url(
   ${extraPaidHappening.imageUrl || "https://source.unsplash.com/random/?concert"  }
)

"

>
<div class="announcement-icon icon-container">
<i class="fa-solid fa-bullhorn"></i>
</div>
<div class="category-icon icon-container">
  <i class="fa-solid fa-music"></i>
</div>
</div>

<div class="cart-calender">
<div class="cart-calender-date">
<span class="cart-calender-day">01</span>
<span class="cart-calender-month"> MAY</span>
</div>

<div class="cart-calender-content">
<!-- <span class="cart-calender-title">Konsert</span> -->
<h3>${extraPaidHappening.title}</h3>

<div>

<div class="cart-calender-text">
  <i class="fa-solid fa-calendar-days"></i>
  <span class="cart-calender-wholeDate"
    >January 1, 2022 - December 31, 2022</span
  >
</div>
<div class="cart-calender-text">
  <i class="fa-solid fa-clock"></i>
  <span class="cart-calender-time">10:00 AM - 8:00 PM</span>
</div>
<div class="cart-calender-text">
  <i class="fa-solid fa-location-dot"></i>
  <span class="cart-calender-place"
    >London Bridge Station, London, UK</span
  >
</div>
</div>

</div>
</div>

<div class="read-more">
<a href="">
<span>Les mer</span> <i class="fa-solid fa-right-long"></i>
</a>
</div>
</div>

    `;

}

     
    ekstraPaidSlider+= item+  `</div>
  </section>
     `;


    
    return ekstraPaidSlider;
}


function crateSearchHappeningBar(){
    let searchHappeningBar=``;
    searchHappeningBar+=`
    <div class="filterBar-title"><h2>Søk Happening</h2></div>
<section class="filterBar-container">
 
<div class="filterBar-subcontainer">
  <div class="filterBar-container-div">
    <div class="filterBar-container__item">
      <div class="start-date-title date-title">
        <span>Start dato</span>
      </div>
        
        <div class="ui calendar start-date" id="start-date">
          <div class="ui input left icon">
            <i class="calendar icon"></i>
            <input type="text" placeholder="Start dato"
            onchange="myFunc(this)"
            >
          </div>
        </div>
      
    </div>
    <div class="filterBar-container__item">
      <div class="month-date-title date-title">
        <span>Måned</span>
      </div>
    <div class="ui calendar" id="example7">
      <div class="ui input left icon">
        <i class=" time icon"></i>
        <input type="text" placeholder="Time">
      </div>
    </div>
  </div>
    

</div>


<div class="category-month-container">
<!--Month-->
<div class="filterBar-container__item">
  <div class="end-date-title date-title">
    <span>Slutt dato</span>
  </div>
    
    <div class="ui calendar end-date" id="end-date">
      <div class="ui input left icon">
        <i class="calendar icon"></i>
        <input type="text" placeholder="Slutt dato"
        onchange="myFunc(this)"
        >
      </div>
    </div>
</div>
  <div class="category-container">
    <div class="filterBar-container__item  category_filter">
     <span class="category_label date-title"> Kategori</span>
      <div class="filterBar-container__item-category  category_field_selectBtn  calendar"  >
       
      <i class="fa-solid fa-angle-down"></i>
     
      <span>Count</span>
      </div>
    </div>

  </div>
</div>
</div>
<div class="search-happening-btn "><button class="search-btn    ">Søk Happening &nbsp &nbsp<i class="fa-solid fa-play"></i></button></div>


</section>
    
    `;

    return searchHappeningBar;
}


function createMultipleChoiceCategory(){
    let multipleCoiceCategory=``;
    multipleCoiceCategory+=`
    <section class="category-container__item   category_list    ">
  <div class="category_list__item  " >
    <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Select All</label>
  </div>
  <div class="category_list__item  " >
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Familie og moro</label>
  </div>
  <div  class="category_list__item  ">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">Barn og familie</label>
  </div>
  <div  class="category_list__item  " >
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">Festivaler</label>
  </div>
  <div  class="category_list__item  ">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">Sport</label>
  </div>
  <div  class="category_list__item  ">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">Konsert</label>
  </div><div  class="category_list__item  ">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">Utstilling</label>
  </div>
  <div  class="category_list__item  ">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> Teater</label>
  </div>

</section>

    `;

    return multipleCoiceCategory;
}


function createFilterButtons(){
    let filterButtons=``;
    filterButtons+=`
    <div class="filterBtns-wrapper" >
<div   class="happenings-title main-title">
<h1>Happenings</h1>
</div>
<div class="filterBtns-container">
<div><button class="filter-btn">I morgen</button></div>
<div><button class="filter-btn">Denne uka</button></div>
<div><button class="filter-btn">Denne måneden</button></div>
</div>
</div>
    
    `;

    return filterButtons;
}


function createHappeningList(){
    let happeningList=``;
    happeningList+=`
    <!--grid kullanacagiz....-->
<section class="happenings">
<div class="container1 happening-container">
  <div class="box box1"> 1</div>
  <div class="box box2">2</div>
  <div class="box box3"> 3</div>
  <div class="box box4">4</div>
  <div class="box box5"> 5</div>
  <div class="box box6"> 6</div>
  <div class="box box1"> 1</div>
  <div class="box box2">2</div>
  <div class="box box3"> 3</div>
  <div class="box box4">4</div>
  <div class="box box5"> 5</div>
  <div class="box box6"> 6</div>
</div>
</section>
    
    `;

    return happeningList;
}




/*

let extraPaidHappenings=getByHappeningPaymentType(model.data.happenings,3);
    for(let i=0; i<extraPaidHappenings.length; i++){
        console.log(extraPaidHappenings[i])
        let extraPaidHappening=extraPaidHappenings[i];
        ekstraPaidSlider+=` 
<div class="item">
<div class="cart-image">
<div class="announcement-icon icon-container">
<i class="fa-solid fa-bullhorn"></i>
</div>
<div class="category-icon icon-container">
  <i class="fa-solid fa-music"></i>
</div>
</div>

<div class="cart-calender">
<div class="cart-calender-date">
<span class="cart-calender-day">01</span>
<span class="cart-calender-month"> MAY</span>
</div>

<div class="cart-calender-content">
<!-- <span class="cart-calender-title">Konsert</span> -->
<h3>${extraPaidHappening.title}</h3>

<div>

<div class="cart-calender-text">
  <i class="fa-solid fa-calendar-days"></i>
  <span class="cart-calender-wholeDate"
    >January 1, 2022 - December 31, 2022</span
  >
</div>
<div class="cart-calender-text">
  <i class="fa-solid fa-clock"></i>
  <span class="cart-calender-time">10:00 AM - 8:00 PM</span>
</div>
<div class="cart-calender-text">
  <i class="fa-solid fa-location-dot"></i>
  <span class="cart-calender-place"
    >London Bridge Station, London, UK</span
  >
</div>
</div>


</div>
</div>


<div class="read-more">
<a href="">
<span>Les mer</span> <i class="fa-solid fa-right-long"></i>
</a>
</div>
</div>
`;
    }


*/