import Celulares from "../models/Celulares";

export const renderCelulares = async (req, res) => {
    const celulares = await Celulares.find().lean();
    res.render("index", { celulares : celulares });
  };


  export const createCelulares = async (req, res) => {
    const celulares = Celulares(req.body);
    await celulares.save();
    res.redirect("/");
  };


  export const editCelulares = async (req, res) => {
    try {
      const celulares = await Celulares.findById(req.params.id).lean();
      res.render("editarCelular", { celulares });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateCelulares = async (req, res) => {
    const { id } = req.params;
    await Celulares.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  };


  export const deleteCelulares = async (req, res) => {
    const { id } = req.params;
    await Celulares.findByIdAndDelete(id, req.body);
  
    res.redirect("/");
  };


export const statusCelulares = async(req,res) =>{
    const {id} = req.params;
    const celulares = await Celulares.findById(id);
    celulares.opcion = !celulares.opcion;
    await celulares.save();
    res.redirect("/");
  };