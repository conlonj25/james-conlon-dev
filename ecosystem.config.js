module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'AWS.pem',
      user : 'admin',
      host : '54.217.131.73',
      ref  : 'origin/main',
      repo : 'git@github.com:conlonj25/james-conlon-dev.git',
      path : '/home/admin',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
