const aaTop=require('./views/index.html')
const templateStr=template.render(aaTop,{title:'hhhh'})
document.querySelector("#app").innerHTML=templateStr;