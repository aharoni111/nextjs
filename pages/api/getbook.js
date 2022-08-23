// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')
const moment = require('moment');

export default function handler(req, res) {
    
    if (req.method === 'GET') {
      // Process a POST request

    
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      fs.appendFile('./wLog.txt', ip + '  ' + moment().format("DD/MM/YYYY h:mm") + '\r\n' , err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
      console.log(ip)
      console.log(req.url)
      res.send(ip)
    } else {
      // Handle any other HTTP method
      res.status(200).json({ name: 'John Doe' })
    }
    
  
  
  }
  