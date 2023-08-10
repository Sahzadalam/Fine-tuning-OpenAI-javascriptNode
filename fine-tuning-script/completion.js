import { openai } from './api.js'

const prompt =
  'Create a description field in incident table in servicenow' // put your prompt here
const maxTokens = 150
const model = 'davinci:ft-personal-2023-08-10-10-37-12' // put your model id here
const createCompletion = async () => {
  try {
    const response = await openai.createCompletion({
      model: model,
      prompt: prompt,
      max_tokens: maxTokens,
    })
    if (response.data) {
      console.log(response.data.choices)
    } else {
      console.log('no response data')
    }
  } catch (error) {
    console.log(error)
  }
}

createCompletion()
