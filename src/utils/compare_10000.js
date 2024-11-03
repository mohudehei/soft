export function makeproblem_compare_10000(num)
{
    let problems={};
for(let i=1;i<=num;i++)
    {
        let a =Math.round(Math.random()*10000);
        let b = Math.round(Math.random()*10000);  
        let ans=' ';
        if(a>b)ans='>';
        else if(a==b)ans='=';
        else  ans='<';
        let qu=a+' ? '+b;
        problems[i]={
            question:qu,
            right_answer:ans,
            user_answer:""
        };
    
    }
    return problems;
}
