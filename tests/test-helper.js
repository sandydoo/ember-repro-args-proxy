import Application from 'ember-args-proxy-test/app';
import config from 'ember-args-proxy-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
