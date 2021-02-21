'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

  // GET /messages/thread/:user/:with/:_limit/:_before
  async thread(ctx) {
    // console.log(ctx.params);
    const user = ctx.params.user;
    const _with = ctx.params.with;
    const _limit = ctx.params._limit;
    let _before = ctx.params._before;
    console.log({ _before });   // e.g. 2020-12-10T00:00:00Z
    if (_before == "null") {
      _before = new Date();
    }
    console.log({ _before });

    // get messages with a specific user, latest messages first
    // if _before date is null, use the current datetime
    let entity = await strapi.services.message.find({ 
      _where: { _or: [{ from_user:user, to_user:_with }, { to_user:user, from_user:_with }] },
      published_at_lt: _before, _limit: _limit, _sort: 'published_at:desc' });
    
    // removes all private fields from the model and its relations
    entity = sanitizeEntity(entity, { model: strapi.models.message });

    // remove unused/unnessassary fields for the client (to reduce data traffic & increase performance)
    entity = entity.map((en) => ({
      "id":en.id, 
      "message":en.message,
      "metaData":en.metaData,
      "fromId":en.from_user.id,
      "toId":en.to_user.id,
      "createDate":en.published_at
    }));
    // note: use the published_at date because the API won't expose the record/document until it's published
    
    return entity;
  }
};
