// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';


export default async function handler(req, res) {
    if (req.method === 'GET') {
        await axios.get('https://office.otzar.org/api/address/getrecentbooks').then(response => {
            console.log(response.data);
            res.json(response.data)
        });
      
    } else {
      // Handle any other HTTP method
      res.status(200).json({ name: 'John Doe' })
    }
    
  
  
  }
  