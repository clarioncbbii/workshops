// this creates a static nested route --> "/profile/manny"
// but we need a nested dynamic route --> "/profile/:username"

// export default function MannyPage(){
//     return(
//       <>
//       <h1>
//         Manny's page
//       </h1>
//       </>  
//     )
// }

//TODO: We need is a dynamic nested route --> "/profile/:username"
//* In the React client, we used useParams to destructure the value of the dynamic params
//! But, we cannot use hooks in the server! :(

// In the Express server, we had the request object, where params were stored
//* In Next.js, we have access to the params object!

export default async function ProfilePage({ params }) {
  //params are async
  const { username } = await params; //! username is the name of my folder - not random!
  //can also be written as: const usernameParams = params.username;

  console.log(username); //for double-checking

  return (
    <>
      {/* we need to escape ' (apostrophe) using &apos; OR ELSE VERCEL WILL NOT DEPLOY WITH THE ERROR */}
      <h1>{username}&apos;s Page</h1>
    </>
  );
}
