var faker = require('faker');

function generateCompanies() {
  var companies = [];
  for (var id = 0; id < 50; id++) {
    var companyName = faker.company.companyName();
    var companySuffix = faker.company.companySuffix();
    var email = faker.internet.email();
    var accountName = faker.finance.accountName();

    companies.push({
      id: id,
      company_name: companyName,
      company_suffix: companySuffix,
      account_name: accountName,
      email: email,
    });
  }
  return { companies: companies };
}

module.exports = generateCompanies;
