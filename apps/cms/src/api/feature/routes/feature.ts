export default {
  routes: [
    {
      method: 'GET',
      path: '/features',
      handler: 'feature.find',
      config: {
        auth: false,
      },
    },
  ],
};
