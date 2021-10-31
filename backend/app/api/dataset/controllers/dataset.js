'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const populate = [
      "author",
      "residual_limits",
      "residual_limits.active_ingredient",
      "residual_limits.aptitude",
      "residual_limits.crop",
    ];

    const entity = await strapi.services.dataset.findOne({ id }, populate);
    return sanitizeEntity(entity, { model: strapi.models.dataset });
  },
  async update(ctx) {
    const { id } = ctx.params;
    const populate = [
      "author",
      "residual_limits",
      "residual_limits.active_ingredient",
      "residual_limits.aptitude",
      "residual_limits.crop",
    ];

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.dataset.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.dataset.update({ id }, ctx.request.body);
    }

    entity = await strapi.services.dataset.findOne({ id }, populate);

    return sanitizeEntity(entity, { model: strapi.models.dataset });
  },
};
