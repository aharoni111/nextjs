// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Process a POST request
    console.log('gfdgdfdfg')
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' })
  }
  


}
