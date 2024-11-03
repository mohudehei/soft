export function makeproblem_mul_easy(num)
{
    let problems={};
for(let i=1;i<=num;i++)
    {
        let a =Math.round(Math.random()*10);
        let b = Math.round(Math.random()*10);  
        let ans='';
        let tmp=Math.random();
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
    return  problems;
}
