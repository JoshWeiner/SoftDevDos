//Joshua Weiner
//SoftDev2 pd6
//K #21: Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
//2019 - 04 - 29

d3.csv("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv?token=AF523XYEUEC4DTGCS4YUNHK42E4HG").then(function(data){

    var PS9_mightyfine = data.filter(function(n){
        return (n["DBN"]=="03M009");
    })
    console.log(PS9_mightyfine)

    var num_students = PS9_mightyfine.map(function(n){
        return parseInt(n["total_enrollment"])
    });
    console.log(num_students)

    var special_education = PS9_mightyfine.map(function(n){
        return parseInt(n["sped_num"])
    });
    console.log(special_education)

    var total_special_education = special_education.reduce(function(a,b){
        return a+b;
    });
    console.log(total_special_education)
});
