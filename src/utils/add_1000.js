export function makeproblem_add_1000(num)
{
    let problems={};
for(let i=1;i<=num;i++)
    {
        let a;
        let b;
        let aa=Math.random();
        if(aa>=0.5)
            {
                while(1)
                    {
                        a =Math.round(Math.random()*1000);
                        b = Math.round(Math.random()*1000);  
                        if(a+b<=1000)break;
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
        else
        {
            while(1)
                {
                    a =Math.round(Math.random()*1000);
                    b = Math.round(Math.random()*1000);  
                    if(a-b>0)break;
                }
                let ans='';
                let tmp=Math.random();
                let op;
                if(tmp>=0.5)op=1;
                else op=0;
                let qu;
                if(op==1) qu=a+" - "+b+" = ?";
                else qu=a +" - ? = "+(a-b);
                if(op==1)ans=a-b;
                else ans=b;
                problems[i]=
                {
                    question:qu,
                    right_answer:ans,
                    user_answer:""
                }
        }
    }
    return problems;
}
