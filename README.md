Developer Setup
----------------
Service is to search for an actor to learn more about them and work that they have been in.

Installation
-------------------
* Run `npm install`

Clone the repository
--------------------
* Run: `git clone git@github.com:DanCSnyder/nuulyProject.git`

Environment Variables and Secrets
----------------------------
* Create a `.env.local` file in the root directory
* Create an API key from `https://www.themoviedb.org/settings/api?language=en-US`
* Add key to `.env.local` in `MDB_API`

How to Run
----------------------------
* Run `npm run dev`

Future Steps
----------------------------
* Cypress tests for E2E
    - I never wrote cypress tests with Next.js. Trying to intercept the serverside API calls was more challenging than I anticipated and ran out of time
* Error Handling
    - The calls don't have any types of catches on them right now. Obviously, this is not the most ideal setup, but we would want some type of handling for different failed situations. 
* Deploy a production environment


Explanation
----------------------------
- I chose Next.js and Tailwindcss to build this little project. I never used either of the technology and given the prompt I figured it would be fun to work in it. I have read a lot of about the utility and small build size of Tailwind. It was incredibly quick and easy to work in. I had a lot of enjoyment out of building this little app! Thanks.