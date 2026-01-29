//TODO: render each individual rollercoaster

export async function generateMetadata({ params }) {
  const { rollercoasterId } = await params;

  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]);
  console.log(query);

  const data = query.rows[0];
  return {
    title: `${data.name} - ${rollercoasterId}`,
    description: `A rollercoaster with a height of ${data.height} and located in ${data.country}. Amazing! Thrilling! Entertaining!`,
  };
}

import { db } from "@/utils/dbConnection";
import Image from "next/image";

//! NEW: IMPLEMENTING 'NOT FOUND' PAGE LOGIC
//* (1) import notFound function
import { notFound } from "next/navigation";

export default async function RollercoasterId({ params }) {
  const { rollercoasterId } = await params;

  //query our database
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]); //array in rows
  console.log(query);

  const data = query.rows[0]; //object

  console.log(data);

  //! try-and-catch is not suitable for this type of error handling
  //* (2) if the rollercoaster id doesn't exist, we render the not-found page
  //check if the data array is empty or not
  //if (!rollercoasterId) {
  //trigger not-found logic
  // }

  //I want to check if the length of the query is equal to zero
  //Because I want to use the length property --> which one has that property?
  //Data is an object, not an array --> length is an array property

  if (query.rows.length === 0) {
    notFound();
  }

  return (
    <>
      <h1 className="bg-amber-500">Rollercoaster Id</h1>
      <h2>{data.name}</h2>
      <Image src={data.url} alt={data.name} width={500} height={200} />
      <p>{data.height}</p>
      <p>{data.country}</p>
    </>
  );
}
