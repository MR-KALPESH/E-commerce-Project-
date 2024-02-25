import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// your MOngoDB database connection

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://mrkalpesh03:Kalpesh2004@cluster0.eg97dkc.mongodb.net/Ecommerce-2023";  

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
