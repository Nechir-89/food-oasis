const db = require("./db");
const camelcaseKeys = require("camelcase-keys");

const selectAll = async () => {
  const sql = `
    select id, name, address_1, address_2, city, state, zip,
    phone, email, notes,
    tipster_name, tipster_phone, tipster_email,
    hours, category, suggestion_status_id, admin_notes
    from suggestion
    order by created_date
  `;
  const result = await db.manyOrNone(sql);
  return result.map((r) => camelcaseKeys(r));
};

const selectById = async (suggestionId) => {
  // Need to cast id to number so pg-promise knows how
  // to format SQL
  const id = Number(suggestionId);
  const sql = `
    select id, name, address_1, address_2, city, state, zip,
    phone, email, notes,
    tipster_name, tipster_phone, tipster_email,
    hours, category, suggestion_status_id, admin_notes
    from suggestion where id = $<id>`;

  const row = await db.one(sql, { id });
  return camelcaseKeys(row);
};

const insert = async (model) => {
  model.suggestionStatusId = 1;
  const sql = `insert into suggestion (
    name, address_1, address_2,
    city, state, zip,
    phone, email, notes,
    tipster_name, tipster_phone, tipster_email,
    hours, category
  ) values (
    $<name>, $<address1>, $<address2>,
    $<city>, $<state>, $<zip>,
    $<phone>, $<email>,  $<notes>,
    $<tipsterName>, $<tipsterPhone>, $<tipsterEmail>,
    $<hours>, $<category>
  ) 
  returning id`;
  const result = await db.one(sql, model);
  return { id: result.id };
};

const update = async (model) => {
  const sql = `update suggestion set
    name = $<name>,
    address_1 = $<address1>,
    address_2 = $<address2>,
    city = $<city>,
    state = $<state>,
    zip = $<zip>,
    phone = $<zip>,
    email = $<email>,
    notes = $<notes>,
    tipster_name = $<tipsterName>,
    tipster_phone = $<tipsterPhone>,
    tipster_email = $<tipsterEmail>,
    hours = $<hours>,
    category = $<category> ,
    suggestion_status_id = $<suggestionStatusId>,
    admin_notes = $<adminNotes>
  where id = $<id>`;
  await db.none(sql, model);
};

const remove = async (id) => {
  const sql = `
    delete from suggestion
    where id = $<id>;`;

  const result = await db.result(sql, { id: Number(id) });
  return result.rowCount;
};

module.exports = {
  selectAll,
  selectById,
  insert,
  update,
  remove,
};
