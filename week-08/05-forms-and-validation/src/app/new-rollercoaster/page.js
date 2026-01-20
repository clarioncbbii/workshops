//static route --> "/new-rollercoaster"

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; //! DO NOT USE THE DIST FOLDER VERSION IN THE DROP-DOWN MENU


//TODO: render a list of all rollercoasters from database 

export default  function NewRollercoasterPage (){
//Forms in React client --> event (onSubmit), state and useState (store and control form values), to track changes (onChange event)
//All the tools we used in the client to handle form submissions are not available in the server 

//* FORMS IN NEXT.js:

//* to handle the form submission --> a server function
//a server function is an async function that executes in the server specifically 
async function handleSubmit (rawFormData){
//the "use server" directive tells the function where we want it to execute (with this, we change the behaviour of this function)
"use server" 
//the rawFormData parameter will be the placeholders for the user's input
//* storing form values --> use an object

console.log(rawFormData)

const formValues = {
// input names of the form as the values
 rollercoasterName: rawFormData.get("rollercoasterName"),
 height: rawFormData.get("height"),
 country: rawFormData.get("country"),
 url: rawFormData.get("url")
};

//* our formValues can be refactored for efficiency
// const formValues = Object.fromEntries(rawFormData)
//* we could destructure formValues:
// const {rollercoasterName, height, country, url} = Object.fromEntries(rawFormData)
// const {rollercoasterName, height, country, url} --> allows us to simplify the [#] of the query, instead of formValues.rollercoasterName we can use rollercoasterName directly.

console.log(formValues) 

//insert formValues in the database
db.query(`INSERT INTO rollercoasters (name, height, country, url) VALUES ($1, $2, $3, $4)`, [
  formValues.rollercoasterName,
  formValues.height,
  formValues.height,
  formValues.url
])

//revalidate the data in rollercoasters
//so, next.js will delete the cached version of this page and reload the elements on it to include the new submission
revalidatePath("/rollercoasters")

//*Extra UX touch: redirect the user to the rollercoasters page
redirect("/rollercoasters")
}

return (
    <>
    <h1> New Rollercoasters Page</h1>
   <form action={handleSubmit}>
        <label htmlFor="rollercoasterName">Rollercoaster Name: </label>
        <input type="text" name="rollercoasterName" maxLength={255} required/>
        <label htmlFor="height">Height (m): </label>
        <input type="number" name="height" min={0} required />
        <label htmlFor="country">Country: </label>
        <input type="text" name="country" maxLength={255} required />
        <label htmlFor="url">Image link: </label>
        <input
          type="text"
          name="url"
          required
          placeholder="copy and paste a url"
        />
        <button className="bg-amber-600">Submit</button>
      </form>
    </>
  );
}