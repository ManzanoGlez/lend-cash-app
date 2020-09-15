const Validator = require("validatorjs");
const words = require("./lang/es_lang_words.json");
 
Validator.useLang("es");

Validator.setAttributeFormatter((attribute) => {
    return attribute.replace(/_/g, " ");
});

const customMsg = {
    same: {
        string: "El campo confirmar contraseña y :same deben coincidir.",
    },
};

const validate = async (data, rules) => {
    const validator = new Validator(data, rules, customMsg);

    validator.setAttributeNames(words);

    return validator;
};


module.exports = { validate };
