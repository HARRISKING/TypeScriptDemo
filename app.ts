// document.getElementsByClassName('root').addEventListener('click',a,false)
// function a(){
//     console.log('引用成功')
// }
// function a(name:string){
//     console.log('引用成功',name)
// }
// document.getElementsByClassName('root').addEventListener('click',a,false)
// let user = 'lalala'

// const isBoolean: boolean = false
const isBoolean: Boolean = false
console.log(isBoolean)

interface AppObj {
    a:number,
    b?:string
}
const obj :AppObj = {
    a:234,
}
