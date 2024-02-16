Demo React application

Run `> npm run flow:check` to fire FlowType checking

## BadgesDashboard Component

The `BadgesDashboard` component is responsible for displaying the badges that users have earned. It fetches real-time data from the '/badges' API and displays each badge with its name, visual representation, criteria, and other details. Users can click on a badge to see more information about it. The component is interactive and is designed to be user-friendly and responsive across all screen sizes.

### Usage
To view the badges dashboard, navigate to the `/badges` route in the application.

### Fetching Data
The component fetches badge data from the following API endpoint: `https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/badges`. The data is displayed once it is successfully retrieved.
