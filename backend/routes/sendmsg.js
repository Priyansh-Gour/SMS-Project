const unirest = require("unirest");
const req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");
const express = require("express");

const router = express.Router();

let userNumbers = "";

router.post('/sendmsg' , async (request , respon) => {
    try {
        fetch("http://localhost:5000/api/numbers/getnumbers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.forEach((element) => {
              userNumbers += `${element.phone_number},`;
            });
            userNumbers = userNumbers.substring(0, userNumbers.length - 1);
            req.query({
              authorization:
                "1xDuY7CKoyP5GUOZLT6ItqizHJREkjgBSw0Q8nsmvra3Fdpec4HgSP6s5mGXvFd9piAyIaD84lwMjtc3",
              message: `${request.body.title} :- ${request.body.msg}`,
              language: "english",
              route: "q",
              numbers: userNumbers,
            });

            req.headers({
              "cache-control": "no-cache",
            });

            req.end(function (res) {
              if (res.error) throw new Error(res.error);

              console.log(res.body);
            });
          });
          respon.status(200).send({msg : "Message sent"})
    } catch (error) {
        respon.status(400).send(error);
    }
      
})

module.exports = router;