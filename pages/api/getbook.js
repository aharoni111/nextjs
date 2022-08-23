// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === 'GET') {
      // Process a POST request

    
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
      console.log(ip)
      console.log(req.url)
      res.send(ip)
    } else {
      // Handle any other HTTP method
      res.status(200).json({ name: 'John Doe' })
    }
    
  
  
  }
  