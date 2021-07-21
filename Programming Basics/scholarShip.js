function solve(salary, gpa, minSalary){
    salary = Number(salary);
    gpa = Number(gpa);
    minSalary = Number(minSalary);

    let socialScholarship = 0;
    let excellentScholarship = 0;
    
    if(salary < minSalary){
        if(gpa > 4.5){
            excellentScholarship = gpa * 25;
        }
        
    }if(excellentScholarship < socialScholarship){
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    }else if(excellentScholarship > socialScholarship){
        console.log(`You get a scholarship for excellent results ${Math.floor(socialScholarship)} BGN`);
    }else{
        console.log(`You cannot get a scholarship!`);
    }
    
}
solve("480.00", "4.60", "450.00");
solve("300.00", "5.65", "420.00")