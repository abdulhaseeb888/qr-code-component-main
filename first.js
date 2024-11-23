let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"];

companies.shift();
console.log(companies);

companies.splice(2, 0, "Ola");
console.log(companies);

companies.pusha("Amazon");
console.log(companies);
