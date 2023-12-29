const accountId = 123456
let accountEmail = "pankaj@gmail.com"
var accountPassword = "123456"
accountCity = "Noida"
let accountState;

//accountId = 10 // Not allowed
accountEmail = "negi@test.com"
accountPassword = "101010"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not use to var because of issue in block scope and functional scope
*/