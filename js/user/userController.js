

function getHappeningByPaymentType(happenings,paymentTypeId){
    let happeningsByPayment=happenings.filter(happening=>happening.paymentTypeId==paymentTypeId);
    return happeningsByPayment;
}

function getCategoryById(categories,id){
    let category=categories.filter(category=>category.id==id);
    return category[0];
}





function getMyAllDateFormats(date){
    //month-04
    let monthByToDigit=new Date(date).toISOString().slice(5,7);
    //month-4
    let monthByOneDigit=new Date(date).getMonth()+1;
    //month-April-long
    let monthByLongText=new Date(date).toLocaleString('no-no',{month:'long'});
    let monthByShortText=new Date(date).toLocaleString('no-no',{month:'short'});
    //day-9
    let day=new Date(date).toISOString().slice(8,10);
    //let day2=new Date(date).toISOString().slice(8,10);

    let dayByOneDigit=day.length==2 && parseInt(day)<10 ? day.slice(1,2) : day;
    //year.
   // let getYear=new Date(date).getFullYear();
    let year=new Date(date).toISOString().slice(0,4);


    return {
        monthByToDigit,
        monthByOneDigit,
        monthByLongText,
        monthByShortText,
        day,
        dayByOneDigit,
        year
    }
}

function translateCategoryTitleToEnglish(title="event"){

switch (title) {
    case "Familie og moro":
        return "family,fun,happy";
        case "Barn og familie":
            return "child,familiy,kid";
         case "Festival":
             return "festival";  
        case "Sports":
            return "sport";
        case "Konsert" :
            return "concert";
        case "Teater":
            return "theater";
        case "Utstilling":
            return "exhibition";        

    default:
        break;
}
}


//selectAll=this.checked olarak veriliyor input icinden...
//for dongusu disinda var olan selectAll checkboximizin checked durumun diger tum check box lara baglamak, daha dogrusu diger tum checkbox lari selectAll un check durumuna baglamak
function selectAllOrNone(selectAll){
    model.inputs.userPage.isSelectedAll=selectAll;
    for(let i=0;i<model.inputs.userPage.categories.length; i++){
        let category=model.inputs.userPage.categories[i];
        category.isSelected=selectAll;//Bu sekilde baglamis oluyoruz 
    }
    updateView();
}



function findCategory(id){
    return model.inputs.userPage.categories.find(category=>category.id===id);
}
//for dongusu ile dondurdugumuz her bir checkbox 
function toggleCategorySelected(id){
    let category=findCategory(id);
    category.isSelected=!category.isSelected;    

updateView();

}



function getChecked(isSelected){

return  isSelected ? "checked" : "";
}


function getselectedCategoryCountNumber(categories){
let selectedCategories=categories.filter(category=>category.isSelected);
return selectedCategories.length;
}


//Date filtering
//Bu fonksiyonun ilk parametresine verilen tarih 2.parametreye verilen tarihten kucuk ise true sonucunu verecek yani, bu bize ornegin 2.paremtreye kullanicinin girdigi tarih giriliyor 1.parametreye de array de donen tarihi yazacagiz ve sonunda, array icindeki tarihlerden kullanicinin girdigi startdate ten sonra gelen tarihleri getirecegiz....Yani startdate < arraysDate ama endDate>arraysDate
//date1<=date2=>true  
function compareYearMonthDay(date1,date2){
    let date1Year=date1.slice(0,4);
    let date1Month=date1.slice(5,7);
    let date1Day=date1.slice(8,10);
    let date2Year=date2.slice(0,4);
    let date2Month=date2.slice(5,7);
    let date2Day=date2.slice(8,10);
   
if(date1Year<date2Year){//Eger yil kucuk ise digerlerine bakmaya gerek yok
    return true;
}else if(date1Year==date2Year && date1Month < date2Month ){
    return true;
}else if(date1Year==date2Year && date1Month == date2Month && date1Day<=date2Day){
    return true;
}else{
    return false;
}    

}


function getDateFromStartDate(happenings,startDate){
    let result=happenings.filter(happening=>compareYearMonthDay(startDate,happening.happeningStartDate));
    return result;
}


function getDateToEndDate(happenings, endDate){
    let result=happenings.filter(happening=>compareYearMonthDay(happening.happeningStartDate,endDate));
    return result;
}


function getDateBetweenTwoDates(happenings,startDate,endDate){
    let result=happenings.filter(happening=>{
        return compareYearMonthDay(startDate,happening.happeningStartDate) && compareYearMonthDay(happening.happeningStartDate,endDate)
    })
   
     return result;
}

//Vi lister opp extrapid happening øverst
function getHappeningAsideFromExtraPaid(happenings){
    let result=happenings.filter(happening=>happening.paymentTypeId!==3);
    return result;
}
//Vi skal liste opp en månedslig happeningsdate som default

function getCurrentAndOneMonthLaterDates(){
    let myNowDate=new Date();
    let currentDate=myNowDate.toISOString().slice(0,10);
    let myFutureDate=myNowDate.setMonth(myNowDate.getMonth()+1);
    let oneMonthLaterDate= new Date(myFutureDate).toISOString().slice(0,10);
return {
    currentDate,
    oneMonthLaterDate
}
}


function getDateOneWeekLater(dayNumber){
let now = new Date(); 
let currentDate=now.toISOString().slice(0,10);
let myFutureDate=now.setDate(now. getDate() +  dayNumber); 
let futureDate=new Date(myFutureDate).toISOString().slice(0,10);
console.log("currentDate: ",currentDate);
console.log("futureDate: ",futureDate)
return {
    currentDate,
    futureDate
    
}
}





//Filtreleme durumlarini ayri ayri pratik fonksiyonlara donusturelim
function filterByStartEndDatoAndCategory(happenings,categories,startDate,endDate){
   let filteredArray=getDateBetweenTwoDates(happenings,startDate,endDate);
    //Filtered data blir filtrering etter category..

   return getHappeningsByCheckedCategory(filteredArray,categories);
}

function filterByStartDateAndCategory(happenings,categories,startDate){
    let filteredArray=getDateFromStartDate(happenings,startDate);
    return getHappeningsByCheckedCategory(filteredArray,categories);

}

function filterByEndDateAndCategory(happenings,categories,endDate){
    let filteredArray=getDateToEndDate(happenings,endDate);
    return getHappeningsByCheckedCategory(filteredArray,categories);

}

//Unutmayalim bizim search islemindeki happenings dedgimiz extrabetalt disinda kalan happenigs ler cunku extra betalt happenings leri biz en ustte listeledik
function searchHappenings(happenings,categories,startDate,endDate){
    //starDate secilmis mi onu cek et
  console.log("searchHappening calisiyor")

 

  console.log("filteredSTate; ",model.inputs.userPage.filterBtnState);
if(model.inputs.userPage.filterBtnState=="this-month"){
    let {currentDate,oneMonthLaterDate}=getCurrentAndOneMonthLaterDates();
     return  getDateBetweenTwoDates(happenings,currentDate,oneMonthLaterDate);
}else if(model.inputs.userPage.filterBtnState=="this-week"){
    let {currentDate,futureDate}=getDateOneWeekLater(7);
     return  getDateBetweenTwoDates(happenings,currentDate,futureDate);
}else if(model.inputs.userPage.filterBtnState=="tomorrow"){
    let {currentDate,futureDate}=getDateOneWeekLater(1);
    //Som default får vi en date en måneds videre
    
    console.log("getDateBetweenTwoDates: ",getDateBetweenTwoDates(happenings,currentDate,futureDate))
     return  getDateBetweenTwoDates(happenings,currentDate,futureDate);
}



    if(startDate!=="" && endDate!=="" && isAnyCategoryChecked(categories) ){
      return  filterByStartEndDatoAndCategory(happenings,categories,startDate,endDate);

    }else if(startDate!=="" && endDate!==""){
        return getDateBetweenTwoDates(happenings,startDate,endDate);
      
    }else if(startDate!=="" && isAnyCategoryChecked(categories)){
       return filterByStartDateAndCategory(happenings,categories,startDate);

    }else if(endDate!=="" && isAnyCategoryChecked(categories)){
      return  filterByEndDateAndCategory(happenings,categories,endDate)
    }
    else if(startDate!==""){
        return getDateFromStartDate(happenings,startDate);
    }else if(endDate!==""){
    return getDateToEndDate(happenings, endDate);
    }else if(isAnyCategoryChecked(categories)){
      return  getHappeningsByCheckedCategory(happenings,categories)
    }
    else {
        let {currentDate,oneMonthLaterDate}=getCurrentAndOneMonthLaterDates();
       //Som default får vi en date en måneds videre
        return  getDateBetweenTwoDates(happenings,currentDate,oneMonthLaterDate);
    }
     
    
}

//hvis ingen kategori som er valgt,kommer alle kategorier som selectedAll..
function isAnyCategoryChecked(categories){


    let result=categories.some(category=>category.isSelected);
    return result;
}

//Bu catgory filtrelemesine catgory den en az 1 tane secilirse girecek ondan dolayi oncesinde category secimi kontrol edilmeli eger kategory den en az 1 tane secilmis ise bu fonksiyona girmeli..
function getHappeningsByCheckedCategory(happenings,categories){
    //Once isSelected i true olanlarin id sini bul... sonra da o id lerden happenings icinde categoryId sine bu id ler olanlari getir...
    let getCheckedCategories=categories.filter(category=>category.isSelected);
    let result=happenings.filter(happening=>{
        return getCheckedCategories.find(category=>
            { 
                
                return happening.categoryId==category.id}); 
    })
 
    return result;
  
}

//happenings som vi lister opp er, bare betalt og gratis, og en månedslig


//Burayi simdilik kaldirdik montha gore filtrelemeyi
// let {monthByLongText}=getMyAllDateFormats("2022-04-15");


// function getHappeningsByMonth(happenings,month){
  
//     let result=happenings.filter(happening=>{

        
//         return getMyAllDateFormats(happening.happeningStartDate).monthByLongText.toUpperCase()==month.toUpperCase();
//     })
// console.log("result: ", result);

//   model.inputs.userPage.filteredData=result;
//   console.log("filteredData month filtresi :",model.inputs.userPage.filteredData,)
//   updateView();
// }




