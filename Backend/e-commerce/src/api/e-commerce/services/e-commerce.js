'use strict';

/**
 * e-commerce service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::e-commerce.e-commerce');
