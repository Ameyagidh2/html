console.log("This is module which is going to be exported");
function averages(arra){
    let sum=0;    
    arra.forEach(element => {
        sum=sum+element;
        
    });
    return sum/arra.length;
}

module.exports={ 
avg:averages,
name:"ameya"
}