var div = document.createElement('div')
div.innerHTML = '测试'
div.onclick = function(){
    console.log('click')
    import(/* webpackChunkName: "dynamicb" */ './dynamicb').then(res=>{
        console.log(res)
    })
}
document.body.appendChild(div)
