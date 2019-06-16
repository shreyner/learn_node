const fs = require("fs");
const csvtojson = require("csvtojson");

const sourceFile = "./data/node_mentoring_t1_2_input_example.csv";
const file = "./tmp/node_mentoring_t1_2_input_example.json";

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(file);

readStream.pipe(csvtojson()).pipe(writeStream);
