const Joi = require('joi');
const fs = require('fs');

const loadFile = () => {
    try {
        const bufferReaderFile = fs.readFileSync('.././data.json');
        console.log(JSON.parse(bufferReaderFile.toString()));
        return JSON.parse(bufferReaderFile.toString());
    } catch (err) {
        console.log("Error: ", err);
        return []
    }
}

const saveData = (data) => {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync('.././data.json', stringifiedData)
}

const validate = (data) => {
    const schema = Joi.object({
        character: Joi.string().min(3).max(30).required()
    })
    const { error } = schema.validate(data);

    return error
}

module.exports = {
    loadFile,
    saveData,
    validate
}