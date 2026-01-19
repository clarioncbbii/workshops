//TODO: Render a list of users' data 

export default async function UsersPage (){
const response = await fetch("https://dummyjson.com/users")
const data = await response.json()
console.log(data)
//*Note: useEffect and useState are not a server-side thing to think about
return (
  <>
  <h1>Users Page</h1>
  {
    data.map(()=>{})
  }
  </>
);
}

