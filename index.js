var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{ console.log("someone ehre");res.send('Hello World!')})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


function createBankGoals(accountId , name, amount){

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

    var data ={
        "customInformation": [
          {
            "customFieldID" : "name",
            "value" : name,
          //  "customFieldSetGroupIndex": "1"
          },
           {
            "customFieldID" : "amount",
            "value" : amount,
           // "customFieldSetGroupIndex": "1"
           }
        ]
      }
//var data = "{customInformation:[ {\n        \"value\": \""+value+"\"\n}\n]}"}
console.log(data)
xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("PATCH", "https://razerhackathon.sandbox.mambu.com/api/savings/"+accountId+"/custominformation"  );
//console.log("https://razerhackathon.sandbox.mambu.com/api/clients/8a8e866972175537017218ff790e2124/custominformation/emailAddress")
//xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cookie", "AWSALB=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB; AWSALBCORS=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB");

xhr.send(JSON.stringify(data));


}

function updateBankGoals(accountId , index, oldamount,newamount){
    cb2 = function(){

       createBankGoals(accountId,index,newamount)
    }
    cb = function(){
        deleteIndex(accountId, "amount" , cb2, oldamount);
    }
    deleteIndex(accountId, "name" , cb, index)

   }

function createAccount(encKey){

    var data = "{\n    \"savingsAccount\": {\n        \"name\": \"Digital Account\",\n        \"accountHolderType\": \"CLIENT\",\n        \"accountHolderKey\": \""+encKey+"\",\n        \"accountState\": \"APPROVED\",\n        \"productTypeKey\": \"8a8e878471bf59cf0171bf6979700440\",\n        \"accountType\": \"CURRENT_ACCOUNT\",\n        \"currencyCode\": \"SGD\",\n        \"allowOverdraft\": \"true\",\n        \"overdraftLimit\": \"100\",\n        \"overdraftInterestSettings\": {\n            \"interestRate\": 5\n        },\n            \"interestSettings\": {\n        \"interestRate\": \"1.25\"\n    }\n    }\n\n}";
console.log(data)
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://razerhackathon.sandbox.mambu.com/api/savings");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
}

function deleteUser(clientId)
{   var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("DELETE", "https://razerhackathon.sandbox.mambu.com/api/clients/"+clientId);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Cookie", "AWSALB=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB; AWSALBCORS=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB");
    
    xhr.send();
}

function createUser(firstName, lastName){
var data = "{\n    \"client\": {\n        \"firstName\": \""+firstName+"\",\n        \"lastName\": \""+lastName+"\",\n        \"preferredLanguage\": \"ENGLISH\",\n        \"notes\": \"Enjoys playing RPG\",\n        \"assignedBranchKey\": 8a8e878e71c7a4d70171ca6ab05a12fe\n    },\n    \"idDocuments\": [\n        {\n            \"identificationDocumentTemplateKey\": \"8a8e867271bd280c0171bf7e4ec71b01\",\n            \"issuingAuthority\": \"Immigration Authority of Singapore\",\n            \"documentType\": \"NRIC/Passport Number\",\n            \"validUntil\": \"2021-09-12\",\n            \"documentId\": \"S9812345A\"\n        }\n    ],\n    \"addresses\": [],\n    \"customInformation\": [\n    	{\n    		\"value\":\"Singapore\",\n    		\"customFieldID\":\"countryOfBirth\"\n    		\n    	}\n    \n    	]\n}";
console.log(data)
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://razerhackathon.sandbox.mambu.com/api/clients");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cookie", "AWSALB=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB; AWSALBCORS=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB");

xhr.send(data);}

function updateClientInfo(firstName, lastName, email, ){
    console.log(data)
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
var data = "{\n        \"value\": \""+email+"\"\n}"
console.log(data)
xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});
var cb =function(encKey){xhr.open("PATCH", "https://razerhackathon.sandbox.mambu.com/api/clients/"+encKey+"/custominformation/emailAddress");
console.log("https://razerhackathon.sandbox.mambu.com/api/clients/8a8e866972175537017218ff790e2124/custominformation/emailAddress")
//xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cookie", "AWSALB=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB; AWSALBCORS=+Vx8SUHGd5mmZeTiEtmAptGT955CW2QWTPscrHUq+XFbRaQLrz0helySfW72JUkQuWg9H7jzrahuBl+2MLLqwtK4biwYuUBzb7k6okzE+3y3t5kJqnSNcCrkmSbB");

xhr.send(data);}
 getClientId(firstName, lastName,cb,"encodedKey");


}

function getClientFeature(firstName, lastName ,cb,feature){


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log( JSON.parse(this.responseText)[0]);
    cb( JSON.parse(this.responseText)[0][feature]);
  }
});

xhr.open("GET", "https://razerhackathon.sandbox.mambu.com/api/clients/?firstName="+firstName+"&lastName="+lastName);
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Cookie", "AWSALB=uIfGmduL51kWQ63F+dFIq6E2v3O52KDAYyJdBERkMS3nn/JtsD8o7StRvRxA9Rc33VvaKcsygKiv/RZ4p1Hjs63+vyKcfDUcSUCFTB9/x83QO5FYyhoCwPwjBoED; AWSALBCORS=uIfGmduL51kWQ63F+dFIq6E2v3O52KDAYyJdBERkMS3nn/JtsD8o7StRvRxA9Rc33VvaKcsygKiv/RZ4p1Hjs63+vyKcfDUcSUCFTB9/x83QO5FYyhoCwPwjBoED");

xhr.send();
    
}
//deleteUser("977964431")
//createUser("new" , "User");
//updateClientInfo("Rahul" , "Parthasarathy", "ttaa@sss.com" );
//addGoals("8a8e866972175537017218ff790e2124" , "700")
//createAccount("487787639")
//updateBankGoals("OWVH344" , "Spain Trip" , "40");
//updateBankGoals("OWVH344" , "That Red Dress" , "120");
//createBankGoals("OWVH344" , "honda civic" ,"300000")
function deleteIndex(id, field, cb,index){
    var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    cb();
  }
});

returnCustomJSON(id, field, (val)=>{

   
    for(let i  = 0; i < val.length;i++){

        if (val[i]["value"]===index){
            console.log(val[i]["customFieldSetGroupIndex"])

            xhr.open("DELETE", "https://razerhackathon.sandbox.mambu.com/api/savings/OWVH344/custominformation/"+field+"/" +val[i]["customFieldSetGroupIndex"]);
xhr.setRequestHeader("", "");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Cookie", "AWSALB=I1oOiwdnCsU0b+mXzTcyngLHZEU8fdLUHqEO/yUjVofb2jH+2bKBaa59Fhd1poNZm31XIGCZVDtJvEQqdvgmYnvoQG1uw2Nl2PT4xnmKr2686a9cgSHlK/eb42tR; AWSALBCORS=I1oOiwdnCsU0b+mXzTcyngLHZEU8fdLUHqEO/yUjVofb2jH+2bKBaa59Fhd1poNZm31XIGCZVDtJvEQqdvgmYnvoQG1uw2Nl2PT4xnmKr2686a9cgSHlK/eb42tR");

xhr.send(data);
        }
    }
} );

}
function returnCustomJSON(id,field,cb){
    var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
      response = JSON.parse(this.responseText)
     
      cb(response);
  }
});

xhr.open("GET", "https://razerhackathon.sandbox.mambu.com/api/savings/"+id+"/custominformation/"+field);
xhr.setRequestHeader("", "");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Cookie", "AWSALB=D4cUSo7n7EbtmAe/xEpZozeDdJ4clKU87YBWa9oqTNXpNNcnbEVjmKB23OShLwP6PpGfvkCwBMCXKW6hQumn+dFsGf3KVFZWq3o9+CY7XURoAt8QjevN5IiETvu6; AWSALBCORS=D4cUSo7n7EbtmAe/xEpZozeDdJ4clKU87YBWa9oqTNXpNNcnbEVjmKB23OShLwP6PpGfvkCwBMCXKW6hQumn+dFsGf3KVFZWq3o9+CY7XURoAt8QjevN5IiETvu6");

xhr.send(data);
}
function test(id,field,cb){
    var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
      response = JSON.parse(this.responseText)
      tempStr=""
      for(let i = 0 ; i < response.length; i ++){

        tempStr+=response[i]["value"]+ "\n"

      }
      console.log(tempStr)
      cb(tempStr);
  }
});

xhr.open("GET", "https://razerhackathon.sandbox.mambu.com/api/savings/"+id+"/custominformation/"+field);
xhr.setRequestHeader("", "");
xhr.setRequestHeader("Authorization", "Basic VGVhbTkxOnBhc3NCODAxMEUzMTQ=");
xhr.setRequestHeader("Cookie", "AWSALB=D4cUSo7n7EbtmAe/xEpZozeDdJ4clKU87YBWa9oqTNXpNNcnbEVjmKB23OShLwP6PpGfvkCwBMCXKW6hQumn+dFsGf3KVFZWq3o9+CY7XURoAt8QjevN5IiETvu6; AWSALBCORS=D4cUSo7n7EbtmAe/xEpZozeDdJ4clKU87YBWa9oqTNXpNNcnbEVjmKB23OShLwP6PpGfvkCwBMCXKW6hQumn+dFsGf3KVFZWq3o9+CY7XURoAt8QjevN5IiETvu6");

xhr.send(data);
}
app.get("/savings", (req,res)=>{

    account = req.query["id"]
   
    list =[]
    cb2 = function(val){
        list.push(val);
        res.send(list);
    }

    cb=function(val){
        list.push(val);
        test(account,"amount",cb2 )
    }
    test(account, "name" , cb);

})
app.get("/delete" , (req,res)=>{

account=req.query['id']
index = req.query['index']
index = index.replace("%" , " ")
amount = req.query["amount"]

cb2 = function(){

    res.send("DONE")
}
cb = function(val){
    deleteIndex(account, "amount" , cb2, amount);
}
deleteIndex(account, "name" , cb, index);

})
app.get("/createGoal" , (req,res)=>{

    amount = req.query["amount"]
    id = req.query["id"]
    index = req.query["index"]
    createBankGoals(id, index, amount);
    res.send("DONE");
})
app.get("/updateBankGoals" , (req,res)=>{

    oldamount = req.query["oldamount"]
    
    newamount = req.query["newamount"]
    id = req.query["id"]
    index = req.query["index"]
    updateBankGoals(id, index, oldamount ,newamount);
    res.send("DONE");
})