//Async JS Programming
// Callbacks , Promises, Async $ Await

const datas=[
    {name:"Soni", Profession:"Teacher"},
    {name:"Amrita",Profession:"Student"}
];

function getDatas(){
    setTimeout(()=>{
        let output="";
      datas.forEach((data,index)=>{
      output+= `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output
    },1000);    // if time of this function is less than second function then only this fuction 
                // will execute [Because page will refresh before execution of second function]   
}                    // To solve this problem asynchronous concept will apply

/*
                Callback
 // function createdata(newdata){
    function createdata(newdata, callback){
    
    setTimeout(()=>{
        datas.push(newdata);
        callback();
    },2000)
}

createdata({name:"Moni",Profession:"Web Developer"},getDatas)

 // getDatas();   

 */

            //    Promise

            function createdata(newdata, callback){
                return new Promise((resolve, reject)=>{
                  
               
                setTimeout(()=>{
                    datas.push(newdata);
                   // let error=true;
                    let error=false;
                    if(!error){
                        resolve();
                    }
                    else{
                        reject("kuch sahi nahi hai")
                    }
                },2000)
             })
            }   
           
/*            
            
           // createdata({name:"Moni",Profession:"Web Developer"}).then(getDatas)
           createdata({name:"Moni",Profession:"Web Developer"})
           .then(getDatas)
           .catch(err => console.log(err))

*/     


  //Async & Await

 async function start(){
   await  createdata({name:"Moni",Profession:"Web Developer"})
   getDatas();
 } 
 start();