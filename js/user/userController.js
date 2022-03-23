

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
    let monthByLongText=new Date(date).toLocaleString("default",{month:'long'});
    let monthByShortText=new Date(date).toLocaleString("default",{month:'short'});
    //day-9
    let day=new Date(date).toISOString().slice(8,10);
    let day2=new Date(date).toISOString().slice(8,10);

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
console.log("title: ", title);
switch (title) {
    case "Familie og moro":
        console.log("I am here----  child,familiy,kid");
        return "family,fun,happy"
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


