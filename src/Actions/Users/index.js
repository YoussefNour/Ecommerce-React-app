let URL = "http://localhost:3003/"

export async function CreateUser(user){
    let payload;
    await fetch(`${URL}users`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(user)
        }
    )
    .then((res)=>res.json())
    .then((data)=>{payload=data})
    .catch((err)=>console.log(err))

    return(
        {
            type:"CREATEUSER",
            payload
        }
    )
}