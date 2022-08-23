// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')
const moment = require('moment');
import axios from 'axios';
import mysql from 'serverless-mysql';
// const db = mysql({
//   config: {
//     host: "192.168.15.41",
//   user: "root",
//   password: "1234",
//   database: "otzarcust",
//   type: "mysql"
//   }
// });

// async function excuteQuery({ query, values }) {
//     console.log(values)
//   try {
//     const results = await db.query(query, [values]);

//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }


export default async function handler(req, res) {
   
    if (req.method === 'GET') {
      // Process a POST request
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(ip)
    //   const result = await excuteQuery({
    //     query: 'INSERT INTO useractionlog(Cust_id, Action, Date, Drive_status) VALUES(?)',
    //     values: [31594,3,moment().format("DD/MM/YYYY h:mm"),ip]
    // });
    let data = {Cust_id: 31594, Action: 3, Date: moment().format("DD/MM/YYYY h:mm"), Drive_status: ip}
    axios.post('https://office.otzar.org/api/address/getj', data).then(response => {
  console.log(response.data);
});
    // console.log( "ttt",result);

      
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
  