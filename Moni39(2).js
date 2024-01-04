// async function getData(){
//     //Simulate getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500)
//     })
// }

async function getData(){
       //Simulate getting data from a server
       let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       let data = await x.json()  // Instead of json we can write text
      // console.log(data)
      return data
}

async function main() {
  console.log("Loading modules")

  console.log("Do something else")

  console.log("Load data")

  let data = await getData()

  console.log(data)

  console.log("process data")

  console.log("task 2")


}
main()

// settle means resolve or reject
// resolve means promise has setted successfully
// reject means promise has not settled successfully