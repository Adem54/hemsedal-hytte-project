function getHappeningByPaymentType(happenings,paymentTypeId){
    let happeningsByPayment=happenings.filter(happening=>happening.paymentTypeId==paymentTypeId);
    return happeningsByPayment;
}

