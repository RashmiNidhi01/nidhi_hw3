let h=parseInt(prompt('Enter hours:'))
let m=parseInt(prompt('Enter minutes:'))
let s=parseInt(prompt('Enter seconds:'))
var hours=0
var min=0
var sec=0
console.log(`Time input: ${h}h ${m}m ${s}s`)
if(s==59)
{sec=00}
else{
  sec=s+1
}

if(sec==00)
{if(m==59)
  {
    min=00
  }
  else{
    min=m+1
  }
}

else{
  min=m
}


if(min==00)
{
  if(h==23){
    hours=00
  }
  else{
    hours=h+1
  }
}
else{
  hours=h
}
console.log(`One second later:${hours}h ${min}m ${sec}s`)