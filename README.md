# Project Setup

## Backend API

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Restore the dependencies:
   ```sh
   dotnet restore
   ```

3. Update the `appsettings.json` file with your Auth0 settings:
   ```json
   {
     "Auth0": {
       "Domain": "YOUR_AUTH0_DOMAIN",
       "ClientId": "YOUR_AUTH0_CLIENT_ID",
       "ClientSecret": "YOUR_AUTH0_CLIENT_SECRET",
       "Audience": "YOUR_AUTH0_AUDIENCE"
     }
   }
   ```

4. Run the project:
   ```sh
   dotnet run
   ```

## Frontend UI

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env.local` file in the `frontend` directory and add your Auth0 settings:
   ```env
   AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
   AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
   AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET
   AUTH0_AUDIENCE=YOUR_AUTH0_AUDIENCE
   ```

4. Run the project:
   ```sh
   npm run dev
   ```

## Auth0 Configuration

1. Go to the [Auth0 dashboard](https://manage.auth0.com/) and create a new application.

2. Choose "Regular Web Applications" and configure the following settings:
   - Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
   - Allowed Logout URLs: `http://localhost:3000`
   - Allowed Web Origins: `http://localhost:3000`

3. Copy the Domain, Client ID, and Client Secret from the Auth0 dashboard and update the `appsettings.json` file in the backend and the `.env.local` file in the frontend with these values.

## Running the Projects

1. Start the backend API:
   ```sh
   cd backend
   dotnet run
   ```

2. Start the frontend UI:
   ```sh
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.
