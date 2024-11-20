// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("TEST_TOKEN: ", process.env?.TEST_TOKEN)

  res.status(200).json({ name: "John Doe", someVal: process.env?.TEST_TOKEN });
}
