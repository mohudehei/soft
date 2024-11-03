export function makeproblem_add_xiaoshu(num)
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
                        a =Math.random()+Math.round(Math.random()*10);
                        b=Math.random()+Math.round(Math.random()*10);  
                        a=Math.floor(a * 100) / 100;
                        b=Math.floor(b * 100) / 100;
                        break;
                    }
                    let ans='';
                    let tmp=Math.random();
                    let op;
                    if(tmp>=0.5)op=1;
                    else op=0;
                    let qu;
                    if(op==1) qu=a+" + "+b+" = ?";
                    else qu=a +" + ? = "+Math.floor((a+b) * 100) / 100;
                    if(op==1)ans=Math.floor((a+b) * 100) / 100;
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
                    a =Math.random()+Math.round(Math.random()*10);
                        b=Math.random()+Math.round(Math.random()*10);
                    a=Math.floor(a * 100) / 100;
                    b=Math.floor(b * 100) / 100;
                    if(a-b>0)break;
                }
                let ans='';
                let tmp=Math.random();
                let op;
                if(tmp>=0.5)op=1;
                else op=0;
                let qu;
                if(op==1) qu=a+" - "+b+" = ?";
                else qu=a +" - ? = "+Math.floor((a-b) * 100) / 100;
                if(op==1)ans=Math.floor((a-b) * 100) / 100;
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
