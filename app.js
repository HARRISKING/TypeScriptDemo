// document.getElementsByClassName('root').addEventListener('click',a,false)
// function a(){
//     console.log('引用成功')
// }
function a(name) {
    console.log('引用成功', name);
}
// document.getElementsByClassName('root').addEventListener('click',a,false)
var user = 'lalala';
console.log(a(user));
