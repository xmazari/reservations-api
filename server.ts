import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ available_endpoints: ["/dogWalker", "/isAvailable"] });
});

app.get("/isAvailable", (req: Request, res: Response) => {
  res.json({ is_available: true });
});

app.get("/dogWalker", (req: Request, res: Response) => {
  const nameList: string[] = [
    "Patrik",
    "Janka",
    "Monika",
    "Zdeno",
  ];

  res.json({
    dog_walker: nameList[Math.floor(Math.random() * nameList.length)],
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
