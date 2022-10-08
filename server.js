require("dotenv").config();
const app = require("express")();
app.use(require("express").json());
app.use(require("cors")({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 5000;

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { name,email,message} = req.body
    require("EmailSender")({name,email,message})
    res.json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error!" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});