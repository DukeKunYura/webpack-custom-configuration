import React, { useState, useEffect } from 'react';
import imgFond from "@/assets/fond.png";
import Sing from "@/assets/at-sign.svg";

export default function TestAssets() {
  const [value, setValue] = useState(1);

  // const delay = (time: number, executor: any) => {
  //   return new Promise((resolve, rject) => {
  //     setTimeout(()=>{
  //       resolve(executor())
  //     }, time)
  //   }
  // )}

  // const funEx = () => {
  //   return 42
  // }

// const result = delay(5000, funEx)

// result.then(result => console.log(result))

// console.log(result)

// const resProm = Promise.resolve("55")

// resProm.then(res=> console.log(res))

// const twoP = new Promise((resolve, reject)=>{
//   if (value === 890) {
//     resolve({name: "Duke"})
//   }
// })

// const oneP = new Promise((resolve, reject)=>{
//   if (value === 5) {
//     resolve("twoP")
//   }
// })



// oneP.then(result => setValue(888))
// twoP.then(result=> setValue(90000))

// const threeP = new Promise((resolve)=>{
//   setTimeout((arg)=>{resolve(arg)}, 5000, "UUUUUUUUUUU")
// })

// threeP.then(uuu=> console.log(uuu))

const set50 = () => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
  setValue(50)
  resolve("resolve")
}, 5000);
  })
  
}

// const testAsync = async () => {
//   await set50()
//   console.log("await")
//   return {name: "Oleg"}
// }

useEffect(()=>{
  console.log("useEffect")
  // testAsync().then((res)=> console.log(res))

  // const prom50 = set50()

  // Promise.race([prom50]).then((value)=>{console.log(value)})


  let testItem = 0

  const threePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //testItem = (Math.floor((Math.random()*10))+1)
      //console.log(testItem)
      resolve("threePromise")
    }, 1000)
    
  })

  const twoPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //testItem = (Math.floor((Math.random()*10))+1)
      //console.log(testItem)
      resolve(threePromise)
    }, 1000)
    
  })

  const onePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      testItem = (Math.floor((Math.random()*10))+1)
      //console.log(testItem)
      resolve(twoPromise)

    }, 1000)

  })

  onePromise.then(res => {console.log(res); console.log(res)})
  onePromise.then(()=>{console.log(twoPromise.then(res => {console.log(res); console.log(res)}))})

let one = [33];
let two = [55 ,68];
const three = [...one, ...two];
console.log(three)
;

}, [])

  


  return (
    <div>
    {value}
    <button onClick={()=>{setValue(prev=> prev +=1)}}>ПЛЮС</button>
        <h3>TestAssets</h3>
        <img src={imgFond}></img>
        <Sing width={50} height={50} />
    </div>
  )
}
