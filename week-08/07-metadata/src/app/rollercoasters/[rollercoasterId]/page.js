//dynamic route

// ==============================

//! DYNAMIC METADATA --> metadata is a keyword
//* This is metadata for a dynamic route
//we need to generate new metadata depending on the data we are rendering dynamically
//generateMetadata is a keyword

export async function generateMetadata({ params }) {
  //we can specify the values of the metadata properties
  const { rollercoasterId } = await params;
  //query our database for more specific values
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

// ======================================

//TODO: render each individual rollercoaster

import { db } from "@/utils/dbConnection";

export default async function RollercoasterId({ params }) {
  const { rollercoasterId } = await params;

  //query our database
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]);
  console.log(query);

  //wrangle the data
  const data = query.rows[0];

  return (
    <>
      <h1>Rollercoaster Id</h1>
      <h2>{data.name}</h2>
      <img src={data.url} alt={data.name} />
      <p>{data.height}</p>
      <p>{data.country}</p>
    </>
  );
}
