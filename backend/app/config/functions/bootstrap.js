'use strict';
const fs = require('fs');
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

const loadData = (name, service) => {
  const csv = fs.readFileSync(`./data/${name}.csv`, 'utf8')
                .split('\n')
                .filter(Boolean);
  strapi.log.info(`Importing ${name}`);

  csv.forEach((item) => {
    service.find({ name: item })
      .then((e) => {
        if (!e.length) {
          strapi.log.info(`\t- ${item}`);
          service
            .create({ name: item })
            .catch(() => strapi.log.info("Esto"));
        }
      });
  });
};

const loadAdmin = () => {};

module.exports = () => {
  ['active-ingredient', 'aptitude', 'crop'].forEach((type) => {
    const service = strapi.services[type];
    service.count().then((count) => {
      loadData(type, service);
    });
  });
};
