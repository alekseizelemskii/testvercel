module.exports = {
  apps: [
    {
      name: 'web-funnels-monorepo-staging',
      script: 'node_modules/.bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'production', // Default environment
        PORT: 9014,
      },
      env_staging: {
        // Define the staging environment
        NODE_ENV: 'staging',
        PORT: 9014,
      },
    },
  ],
};
