// var config = require('./config');
// var express = require('express');
// var {json} = require('body-parser');
// var nodemailer = require('nodemailer');
//
//
// var transporter = nodemailer.createTransport({
//   service: 'yahoo',
//   secure: false,
//   auth: {
//     user: config.email,
//     pass: config.password
//   }
// });
//
// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
