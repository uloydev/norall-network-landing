export default {
  routes: [
    {
      method: 'GET',
      path: '/testimonials',
      handler: 'testimonial.find',
      config: {
        auth: false,
      },
    },
  ],
};
