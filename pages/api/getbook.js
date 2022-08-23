// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')
const moment = require('moment');
import axios from 'axios';


const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another option
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    return await fn(req, res)
  }
  
  const handler = async (req, res)  => {
    console.log('a   aaaaaaaaaa')

    if (req.method === 'GET') {
      // Process a POST request
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(ip)
    //   const result = await excuteQuery({
    //     query: 'INSERT INTO useractionlog(Cust_id, Action, Date, Drive_status) VALUES(?)',
    //     values: [31594,3,moment().format("DD/MM/YYYY h:mm"),ip]
    // });
    let data = {Cust_id: 31594, Action: 3, Date: moment(), Drive_status: ip}
    await axios.post('https://office.otzar.org/api/address/getj', data).then(response => {
  console.log(response.data);
});
    // console.log( "ttt",result);

      
    //   fs.appendFile('./wLog.txt', ip + '  ' + moment().format("DD/MM/YYYY h:mm") + '\r\n' , err => {
    //     if (err) {
    //       console.error(err)
    //       return
    //     }
    //     //file written successfully
    //   })
      console.log(ip)
      console.log(req.url)
      res.send(ip)
    }
    else if (req.method === 'POST'){
        
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        let time =  moment()
        let dataToSend = {...req.body, ip,time}
        console.log(ip)
        console.log('a   ' + JSON.stringify(dataToSend))
        await axios.post('https://office.otzar.org/api/address/updateBookReqs', dataToSend).then(response => {
            console.log(response.data);
          });
        res.send('sss')
    }
    
    
    else {
      // Handle any other HTTP method
      res.status(200).json({ name: 'John Doe' })
    }
    
  }
  
  module.exports = allowCors(handler)

export default async function handler(req, res) {
// Run the middleware

  
  
  }
  