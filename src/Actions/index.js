let URL = "http://localhost:3500/"

export async function GetAllProducts(){
    let payload=[];
    await fetch(`${URL}products`)
    .then((res)=>{return res.json()})
    .then((data)=>payload=data)
    return(
        {
            type:"PRODUCTS",
            payload
        })   
}

// export async function GetProductById(id){
//     let payload=[];
//     await fetch(`${URL}/products/${id}`)
//     .then((res)=>res.json())
//     .then((data)=>payload=data)
    
//     return(
//         {
//             type:"PRODUCTBYID",
//             payload
//         })  
// }