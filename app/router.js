import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homepage');
  this.route('contact');
  this.route('faq');
  this.route('bugs');
});

export default Router;
