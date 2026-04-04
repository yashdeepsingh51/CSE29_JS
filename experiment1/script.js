function calculateResult(){

    let n=document.getElementById("subject").value;
    let i;
    let total=0;
    let result;
    for(i=1;i<=n;i++){

        let x=parseFloat(prompt("enter the marks of Subject"+i));

        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>=90)
      grade='A+';
    else if(average>=80)
        grade='A';
    else if(average>=70)
        grade='B+';
    else if(average>=60)
        grade='B';
    else if(average>=50)
        grade='C';
    else
        grade='F';


    if(average>=50)
        result="Pass";
    else
        result="Fail";



    document.getElementById("result").innerHTML="Total Marks:"+total+"<br/>"+"Average Marks:"+average+"<br/>"+"Grade:"+grade+"<br/>"+"Result:"+result;
}