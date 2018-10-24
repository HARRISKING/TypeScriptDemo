function a(name) {
    console.log('引用成功', name);
}
// document.getElementsByClassName('root').addEventListener('click',a,false)
var user = [1, 223, 1];
console.log(a(user));
