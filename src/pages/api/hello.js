// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// dead links route is not working when pushing to the remote branch

export default function handler(req, res) {
  console.log("TEST_TOKEN: ", process.env.TEST_TOKEN.toLowerCase());

  res
    .status(200)
    .json({ name: "John Doe", someVal: process.env.TEST_TOKEN.toLowerCase() });
}

