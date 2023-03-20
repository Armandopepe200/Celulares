import { connect } from "mongoose";


(async () => {
    try {
      const db = await connect("mongodb://127.0.0.1:27017/celulares");
      console.log("Database connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();