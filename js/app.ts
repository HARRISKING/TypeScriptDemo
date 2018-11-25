function a(name: string){
    console.log('引用成功',name)
}
// document.getElementsByClassName('root').addEventListener('click',a,false)
const user = [1,223,1]

interface AppObj {
    a:number,
    b?:string
}
const obj :AppObj = {
    a:234,
}

const array:number[]=[1,23,32,11,10]

function sum(x:number,y:number):number{
  return x+y
}

function stringTest(x:string):string{
  return `this is my first test about ${x}`
}

sum(1,2)

stringTest("script")
