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
    // GitHub token to be embedded in HTML
    // No need to store this in secret because this isn't secret
    GITHUB_READONLY_TOKEN: process.env.GITHUB_READONLY_TOKEN
  }
};
