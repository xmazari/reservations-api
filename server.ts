import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ available_endpoints: ["/dogWalker"] });
});

app.get("/dogWalker", (req: Request, res: Response) => {
  const nameList: string[] = [
    "Patrik",
    "Patrik",
    "Janka",
    "Janka",
    "Monika",
    "Monika",
    "Zdeno",
    "Zdeno",
    "",
  ];

  res.json({
    dog_walker: nameList[Math.floor(Math.random() * nameList.length)],
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
