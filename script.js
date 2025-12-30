const mm2 = document.getElementById("mm2");
const nn2 = document.getElementById("nn2");
const nn1 = document.getElementById("nn1");
const mm1 = document.getElementById("mm1");

//these are permanent
const pointsnn2 = nn2.getBoundingClientRect();
const pointsmm2 = mm2.getBoundingClientRect();
const pointsmm1 = mm1.getBoundingClientRect();
const pointsnn1 = nn1.getBoundingClientRect();

function onetotwo(counter){
    if(counter == 0){
    mm1.style.transform = "translate(" + (pointsnn1.left - pointsmm1.left)+ "px," + (pointsnn1.top - pointsmm1.top) + "px)";
    nn1.style.transform = "translate(" + (pointsmm2.left - pointsnn1.left)+ "px," + (pointsmm2.top - pointsnn1.top) + "px)";
    nn2.style.transform = "translate(" + (pointsmm1.left - pointsnn2.left)+ "px," + (pointsmm1.top - pointsnn2.top) + "px)";
    mm2.style.transform = "translate(" + (pointsnn2.left - pointsmm2.left)+ "px," + (pointsnn2.top - pointsmm2.top) + "px)";
    }else if(counter == 1){
    mm1.style.transform = "translate(" + (pointsmm2.left - pointsmm1.left)+ "px," + (pointsmm2.top - pointsmm1.top) + "px)";
    nn1.style.transform = "translate(" + (pointsnn2.left - pointsnn1.left)+ "px," + (pointsnn2.top - pointsnn1.top) + "px)";
    mm2.style.transform = "translate(" + (pointsmm1.left - pointsmm2.left)+ "px," + (pointsmm1.top - pointsmm2.top) + "px)";
    nn2.style.transform = "translate(" + (pointsnn1.left - pointsnn2.left)+ "px," + (pointsnn1.top - pointsnn2.top) + "px)";
    }else if (counter == 2){
    mm1.style.transform = "translate(" + (pointsnn2.left - pointsmm1.left)+ "px," + (pointsnn2.top - pointsmm1.top) + "px)";  
    nn1.style.transform = "translate(" + (pointsmm1.left - pointsnn1.left)+ "px," + (pointsmm1.top - pointsnn1.top) + "px)";  
    mm2.style.transform = "translate(" + (pointsnn1.left - pointsmm2.left)+ "px," + (pointsnn1.top - pointsmm2.top) + "px)";  
    nn2.style.transform = "translate(" + (pointsmm2.left - pointsnn2.left)+ "px," + (pointsmm2.top - pointsnn2.top) + "px)";  
    }else if(counter == 3){
    mm1.style.transform = "translate(" + (pointsmm1.left - pointsmm1.left)+ "px," + (pointsmm1.top - pointsmm1.top) + "px)";     
    mm2.style.transform = "translate(" + (pointsmm2.left - pointsmm2.left)+ "px," + (pointsmm2.top - pointsmm2.top) + "px)";  
    nn1.style.transform = "translate(" + (pointsnn1.left - pointsnn1.left)+ "px," + (pointsnn1.top - pointsnn1.top) + "px)";  
    nn2.style.transform = "translate(" + (pointsnn2.left - pointsnn2.left)+ "px," + (pointsnn2.top - pointsnn2.top) + "px)";  
    }
}


let eventtracker = 0;
let counter=0;

mm1.addEventListener("click",()=>{
    if(counter==0){
    onetotwo(counter);
    counter++
    nn2.style.zIndex = 0;
    nn1.style.zIndex = 1;
    mm2.style.zIndex = 1;
    mm1.style.zIndex = 0;
    }else if(counter==1){
    onetotwo(1);
    counter++
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==2){
    onetotwo(2);
    counter++;
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==3){
    onetotwo(3);
    counter=0;
    nn2.style.zIndex = 1;
    mm1,style.zIndex = 0;
    nn1.style.zIndex = 0;
    mm2.style.zIndex = 1;
    }
})
nn1.addEventListener("click",()=>{
    if(counter==0){
    onetotwo(counter);
    counter++
    nn2.style.zIndex = 0;
    nn1.style.zIndex = 1;
    mm2.style.zIndex = 1;
    mm1.style.zIndex = 0;
    }else if(counter==1){
    onetotwo(1);
    counter++
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==2){
    onetotwo(2);
    counter++;
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==3){
    onetotwo(3);
    counter=0;
    nn2.style.zIndex = 1;
    mm1,style.zIndex = 0;
    nn1.style.zIndex = 0;
    mm2.style.zIndex = 1;
    }
})
mm2.addEventListener("click",()=>{
    if(counter==0){
    onetotwo(counter);
    counter++
    nn2.style.zIndex = 0;
    nn1.style.zIndex = 1;
    mm2.style.zIndex = 1;
    mm1.style.zIndex = 0;
    }else if(counter==1){
    onetotwo(1);
    counter++
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==2){
    onetotwo(2);
    counter++;
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==3){
    onetotwo(3);
    counter=0;
    nn2.style.zIndex = 1;
    mm1,style.zIndex = 0;
    nn1.style.zIndex = 0;
    mm2.style.zIndex = 1;
    }
})
nn2.addEventListener("click",()=>{
    if(counter==0){
    onetotwo(counter);
    counter++
    nn2.style.zIndex = 0;
    nn1.style.zIndex = 1;
    mm2.style.zIndex = 1;
    mm1.style.zIndex = 0;
    }else if(counter==1){
    onetotwo(1);
    counter++
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==2){
    onetotwo(2);
    counter++;
    mm2.style.zIndex = 0;
    mm1.style.zIndex = 1;
    }else if(counter==3){
    onetotwo(3);
    counter=0;
    nn2.style.zIndex = 1;
    mm1,style.zIndex = 0;
    nn1.style.zIndex = 0;
    mm2.style.zIndex = 1;
    }
})

/*
nn2.addEventListener("click",()=>{
   // onetotwo(eventtracker);
   // eventtracker++;
    if(eventtracker == 0){
    onetotwo(eventtracker);
    eventtracker++;
    }

})
mm2.addEventListener("click",()=>{
    if(eventtracker == 1){
    onetotwo(eventtracker);
    eventtracker++;    
    }
})
nn1.addEventListener("click",()=>{
    if(eventtracker == 2){
    onetotwo(eventtracker);
    eventtracker++;    
    }
})
mm1.addEventListener("click",()=>{
    if(eventtracker == 3){
    onetotwo(eventtracker);
    eventtracker=0;  
    }
})






/*
//calculations from permanents

const onetotwocalcx = (pointsnn1.left - pointsmm1.left)
const onetotwocalcy = (pointsnn1.top - pointsmm1.top)

const twotothreecalcx = (pointsmm2.left - pointsnn1.left)
const twotothreecalcy = (pointsmm2.top - pointsnn1.top)

const threetofourcalcx = (pointsnn2.left - pointsmm2.left)
const threetofourcalcy = (pointsnn2.top - pointsmm2.top)

const fourtoonecalcx = (pointsmm1.left - pointsnn2.left)
const fourtoonecalcy = (pointsmm1.top - pointsnn2.top)




let counter=0;
function onetotwo(counter){
    if(counter==0){
        mm1.style.transform = "translate(" + onetotwocalcx + "px," + onetotwocalcy + "px)";
        nn2.style.transform = "translate(" + fourtoonecalcx + "px," + fourtoonecalcy + "px)";
        mm2.style.transform = "translate(" + threetofourcalcx + "px," + threetofourcalcy + "px)";
        nn1.style.transform = "translate(" + twotothreecalcx + "px," + twotothreecalcy + "px)";
    }else if(counter==1){
        nn2.style.transform = "translate(" + twotothreecalcx + "px," + twotothreecalcy + "px)";
    }
}

function fourtoone(counter){
    if(counter==0){
        // something
    }else if(counter==1){
        nn2.style.transform = "translate(" + fourtoonecalcx + "px," + fourtoonecalcy + "px)";
    }
}

let eventtracker = 0;
mm1.addEventListener("click",()=>{
    if(eventtracker == 0){
        onetotwo(counter);
        counter++;
        console.log(counter);
        eventtracker++; //now at this point if the users cursour stays the same, they should click on nn2
        console.log(eventtracker);
    }
})

//nn2
nn2.addEventListener("click",()=>{
    console.log(eventtracker);
    console.log(counter);
    onetotwo(counter);
})






/*
mm2.addEventListener("click",()=>{
    mm1.style.transform = "translate(" + onetotwocalcx + "px," + onetotwocalcy + "px)";
});*/

/*




let counter= 0;
//working
function onetotwo(counter){
    if(counter==0){
    mm1.style.transform = "translate(" + (pointsnn1.left - pointsmm1.left)+ "px," + (pointsnn1.top - pointsmm1.top) + "px)";
    }else if(counter==1){
    mm1.style.transform = "translate(" + (pointsnn1.right + pointsmm1.left)+ "px," + (pointsnn1.bottom - pointsmm1.top) + "px)";
    }
}

function twotothree(){
    nn1.style.transform = "translate(" + twotothreecalcx + "px," + twotothreecalcy + "px)";
}

let eventtracker = 0;
mm1.addEventListener("click",()=>{
    if(eventtracker==0){
        onetotwo(counter);
        eventtracker++;
        counter++;
    }
});
nn2.addEventListener("click",()=>{
    if(eventtracker==1){
        onetotwo(counter);
    }
})*/