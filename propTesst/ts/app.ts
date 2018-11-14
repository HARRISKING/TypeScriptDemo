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

interface TestObj {
	readonly name: string,
    age:number,
    sex?: string,
    [propName :string]: any    
}

const info: TestObj = {
    name: 'harrisking',
    age: 25,
    new:4545
} 

const arr: ( number | string )[] = [12,3,3,'2',2,2]

console.log('arr',arr)

const newconfig :string = 'ssss'
const newconfig1 :string = 'wsrfddsfdsf'