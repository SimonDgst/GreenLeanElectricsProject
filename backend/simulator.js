posneg =  () => {
    let r = 1;
    let temp = Math.random();
    if (temp  < 0.5) {
        r =  -1;
    }
    return r
}

randomG = (lambda,mean) => {
    let r = 0;
    for (let  i=0; i<lambda; i++){
        r+= Math.random();
    }
    return(r*lambda*posneg() + mean);
}


windDay = () => {
    const wind = randomG(2.5,14);
    let windTab = [24];
    for  (let j=0; j<24; j++){
        windTab[j] = randomG (1.5,wind);
    }
    return windTab;
}

elecCons = (pers) =>{
    dayCons = 20;
    for (let i=0; i<pers; i++){
        dayCons += randomG(1, 5);
    }
    return dayCons;
}

elecProd = (windTab) =>{
    dayProd = 0;
    for (let i in windTab){
        if (windTab[i]>20){
            dayProd += 2;
        }
        if (windTab[i]<20 && windTab[i]>10 ){
            dayProd += windTab[i]/10;
        }
    }
    return dayProd;
}

