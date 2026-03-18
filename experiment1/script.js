function calculateResult(){

    let n=document.getElementById("subject").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){

        let x=parseFloat(prompt("enter the marks of Subject"+(i+1)));

        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90)
      grade='A';
    else if(average>80)
        grade='B';
    else if(average>70)
        grade='C';
    else if(average>60)
        grade='D';
    else if(average>50)
        grade='E';
    else
        grade='F';



    let result=document.getElementById("result").innerHTML="Total Marks"+total+"<br/>"+"Average Marks"+average+"<br/>"
}