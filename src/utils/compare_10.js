export function makeproblem_compare_10(num)
{
    let questions={};
    for(let i=1;i<=num;i++)
        {
          let a =Math.round(Math.random()*10);
          let b = Math.round(Math.random()*10);  
          while(a==b)
            {
                a =Math.round(Math.random()*10);
                b = Math.round(Math.random()*10);
            }
          let ans=' ';
          if(a>b)ans='>';
          else if(a==b)ans='=';
          else  ans='<';
          let qu=a+' ? '+b;
          questions[i]={
            question:qu,
            right_answer:ans,
            user_answer:""
          };
        }
    return questions;
}