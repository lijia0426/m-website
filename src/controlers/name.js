// module.exports="lijia"
// export const  name="lijia"
module.exports={
    name:'lijia',
    getName:()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('lijiajia')
            },2000)
        })
    }
}