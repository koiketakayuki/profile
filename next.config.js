module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      'job-offer': { page: '/job-offer' },
      'schedule': { page: '/schedule' },
      'releases': { page: '/releases' }
    };
  },
  env: {
    GITHUB_READONLY_TOKEN: process.env.GITHUB_READONLY_TOKEN
  }
};
