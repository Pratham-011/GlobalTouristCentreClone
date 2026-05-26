module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/contact-us',
        'http://localhost:3000/about',
        'http://localhost:3000/services',
        'http://localhost:3000/blog',
        'http://localhost:3000/luxury-trips',
        'http://localhost:3000/destinations',
        'http://localhost:3000/destinations/day-trips',
        'http://localhost:3000/destinations/domestic',
        'http://localhost:3000/destinations/international',
        'http://localhost:3000/legal',
      ],
      startServerCommand: 'npm run dev',
      startServerReadyPattern: 'ready',
    },
    assert: {
      assertions: {
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
  },
};