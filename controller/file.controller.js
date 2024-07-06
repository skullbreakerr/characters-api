const Joi = require('joi');
const { saveData,validate,loadFile } = require('../src/utils/methods.js');
const data = loadFile();

const getFiles = (req, res) => {
    res.send(data);
}

const getFilesById = (req, res) => {
    const character = data.find(item => item.id === parseInt(req.params.id));
    if (!character) res.status(404).send("req item with id not found");
    res.send(character);
}

const createFile = (req, res) => {

    const error = validate(req.body);

    if(error!== undefined) return res.status(400).send(error.details[0]);

    const newData = {
        id: data.length + 1,
        character: req.body.character,
    }
    data.push(newData);
    res.send(newData);
    saveData(data);

}

const updateFileById = (req,res)=>{

    const targetObj= data.find(item=> item.id === parseInt(req.params.id));
    if(!targetObj) return res.status(404).send("Item with given ID did'nt exist!!");

    const error = validate(req.body);
    if(error!==undefined) return res.status(400).send(error.details[0]);

    targetObj.character = req.body.character;
    res.send(targetObj);
    saveData(data);
}

const deleteFileById = (req,res)=>{
    const targetObj = data.find(item=> item.id === parseInt(req.params.id))
    if(!targetObj) return res.status(404).send("Item with given Id didn't exists!!");

    const index = data.indexOf(targetObj);
    data.splice(index,1);

    res.send(targetObj);
    saveData(data);
    
}

module.exports = {
    getFiles,
    getFilesById,
    createFile,
    updateFileById,
    deleteFileById
}