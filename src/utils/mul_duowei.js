export function makeproblem_mul_duowei(num)
{
    let problems={};
for(let i=1;i<=num;i++)
    {
        let a =Math.round(Math.random()*100);
        let b = Math.round(Math.random()*10); 
        if(a==0)a=a+1;
        if(b==0)b=b+1;
        let ans='';
        let tmp=Math.random();
        let ttmp=Math.random();
        if(ttmp>=0.8)
            {
                a=a*100;
                b=b*10;
            }
        else if(ttmp>=0.5)
            {
                a=a*100;
            }
        else if(ttmp>=0.3)
            {
                b=b*10;
                a=a*10;
            }
        else 
            {
                b=b*100;
                a=a*10;
            }
        let op;
        if(tmp>=0.5)op=1;
        else op=0;
        let qu;
        if(op==1) qu=a+" x "+b+" = ?";
        else qu=a +" x ? = "+(a*b);
        if(op==1)ans=a*b;
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
