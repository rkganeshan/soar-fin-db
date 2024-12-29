SOAR DASHBOARD AND SETTINGS UI

Steps to run this project locally.
Assumption: Node 16 or higher is a pre-requisite. Visit https://nodejs.org/en to get the package.

1. Clone the repository:

   ```bash
   git clone https://github.com/rkganeshan/soar-fin-db.git
   cd soar-fin-db
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if using Yarn:

   ```bash
   yarn install
   ```

## Environment Variables

Add your environment variables in a `.env` file at the root of the project. Example:

```env
VITE_APP_MODE="prod"
```

OR

```env
VITE_APP_MODE="local"
```

If you point to local you need to run the json-server which is a mock server, locally.
To setup the same you can visit : https://github.com/rkganeshan/mock-server , and set it up from there.

You can keep the variable as just "prod" and this will
automatically point to the deployed mock server.

## Usage

### Development

Run the development server:

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

### Build

Build the project for production:

```bash
npm run build
```

or with Yarn:

```bash
yarn build
```

## Scripts

Here is a list of common scripts for this project:

- `dev`: Starts the development server at port 5173.
- `dev-host` : Starts the development server for local as well as
  to be viewed in the devices connected over the same network.
- `build`: Builds the project for production.

## Assumptions made:

1. Mock data for cards (My Cards) section.
2. Mock data for recent transactions ( we are also sorting the
   transactions list by date with the most recent appearing first).
3. Mock data for weekly activity.
4. Mock data for expenses statistics with pre-defined categories.
5. Users or recipients to be show in the Quick Transfer section.
   This "Send" button is a mock function, so no actual transfer is initiated.
   User's images have not been provided in the dummy API response, so we have a
   few images that are mapped against specific names of the users, if the name is
   not present in the mock data list, we'd show a default image.
6. Mock data for balance history.
7. In Settings, Edit Profile tab, the image shown on page load is not
   coming from dummy API response, but a locally stored image.
   So even if the image is edited and new image is uploaded, the new image would
   reflect in the UI as a preview URL but once page is refreshed it will vanish
   as the updated information is not mutated to the backend.
8. The user profile data is also a mock response from API, so changes made
   and saved will not be mutated to the backend.

## FRs and NFRs

1. The UI is responsive across all devices and browsers, interactive elements
   and responsive scrollsand user feedback is taken care of
   by including toasts, tooltips wherever needed. Proper shimmer UI for loading states
   and graceful error handling for API failure scenarios have been covered.
2. ChartJS has been used to accomplish the data vizualization.
3. Form validations for empty fields and standard regex for email and password
   have been incorporated. The save button in settings would be enabled only
   if there is a change is the displayed data or the image is edited, so
   the save button is disabled by default.
4. Smooth transitions have been applied for scenarios like see more/less cards
   in My Cards section and navigating between Edit Profile, Preferences and Security
   tabs in the Settings page.
5. Mock data has been created and hosted separately in a Node server.
   Repo: https://github.com/rkganeshan/mock-server
   Deployed URL: https://mock-server-snowy.vercel.app/
   This was done so that proper API calls could be made from the UI.
   React Query Tanstack and Axios have been used for data fetching.
6. I have used Github as the VCS.
   The branching strategy is:
   feat/... fix/... chore/... are the branches derived from dev.
   dev -> is the pre-prod branch, all changes are merged to dev and previewed
   via Vercel deployments.
   main -> is the prod branch. Changes are pushed from dev to main.
7. For better performance and optimization, images have been lazy loaded.
   Also, the components other than the one in the default landing page(Dashboard) have
   also been lazy laoded. Flyout has also been lazy loaded.
8. Keyboard accessibility has been covered to use the entire application via keyboard,
   and necessary aria-\* labels have been added to all elements for better compliance.
9. The UI and this app is compatible over all major browsers.
