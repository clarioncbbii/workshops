//dynamic route

// ==============================

//! DYNAMIC METADATA --> metadata is a keyword
//* This is metadata for a dynamic route
//we need to generate new metadata depending on the data we are rendering dynamically

export async function generateMetadata() {
  return {
    title: `Info about ${data.name} - ${rollercoasterId}`,
    description: `Amazing, thrilling, entertaining! The name, height, location and image of ${data.name} rollercoaster from our website`,
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
