# APP ARCHITECTURE

## Data --> ALWAYS DATA FIRST!
- Rollercoaster data

## Routing
- "/" --> root route
- "/rollercoasters" --> static route
- "/rollercoasters/:rollercoastersId --> nested dynamic route

## Connect our database to our app
- Connect our database to our app 
  - connection string --> from Supabase (connect w/ transaction pooler)
  - environment variables in .env file --> follow Next.js documentation
  - pool --> we need 'pg' package (run 'npm i pg') and dbConnection file
  - we do not need CORS (Next.js configures it)

## Render the database data on our pages

## Navigation with Link components 
- create a header component (jsx file)
- create navbar with links (use link from next/link)
- nest the header component in the layout.js above children