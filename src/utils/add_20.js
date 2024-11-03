export function makeproblem_add_20(num)
{
    let problems={};
    for(let i=1;i<=num;i++)
    {
        let a;
        let b;
        while(1)
            {
                a =Math.round(Math.random()*20);
                b = Math.round(Math.random()*20);  
                if(a+b<=20)break;
            }
        
        let ans='';
        let tmp=Math.random();
        let op;
        if(tmp>=0.5)op=1;
        else op=0;
        let qu;
        if(op==1) qu=a+" + "+b+" = ?";
        else qu=a +" + ? = "+(a+b);
        if(op==1)ans=a+b;
        else ans=b;
        problems[i]=
        {
            question:qu,
            right_answer:ans,
            user_answer:""
        }
    }
    return problems;
}
