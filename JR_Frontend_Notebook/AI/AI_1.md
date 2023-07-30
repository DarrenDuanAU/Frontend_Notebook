# JR AI课

环境

package.json
```js
{
  "name": "sandbox",
  "version": "1.0.0",
  "description": "AGI tutorial sandbox",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@xenova/transformers": "^2.4.1",
    "dotenv": "^16.3.1",
    "openai": "^3.3.0"
  }
}
```


```js
require('dotenv').config(); // 引入 dotenv 模块，同时加载 .env 文件中的环境变量（即 API KEY）
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Q: Where is the Valley of Kings?\nA:",
  temperature: 0,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
});

console.log(response.data);
```