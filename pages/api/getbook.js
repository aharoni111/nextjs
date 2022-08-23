// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === 'GET') {
      // Process a POST request

    
      var ip = (req.headers["cf-connecting-ip"]) ? req.headers["cf-connecting-ip"] : 'unknown';
    
      console.log(ip)
      console.log(req.url)
      res.send(ip)
    } else {
      // Handle any other HTTP method
      res.status(200).json({ name: 'John Doe' })
    }
    
  
  
  }
  