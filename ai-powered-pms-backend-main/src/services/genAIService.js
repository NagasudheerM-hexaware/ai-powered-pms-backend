const axios = require("axios");
const messageBuilder = require("../utils/message_builder");
const fs = require('fs');

// const additionalKnowledge =
//   "Rate these employees interms of their learning. Here are the employees and numbe rof courses they have taken: \n\n1. John Doe - 5 courses\n2. Jane Doe - 3 courses\n3. John Smith - 2 courses\n4. Jane Smith - 4 courses\n5. John Johnson - 6 courses\n6. Jane Johnson - 1 course\n\nPlease rate them from 1 to 5, where 1 is the lowest and 5 is the highest. If i need to select  few, whcih employees should I select?";

// exports.getAIResponse = async (req, res, next) => {
    
//     const kra_name=req.body.kra_name;
//     const knowledge=req.body.knowledge;
//     const question=req.body.question;
//     const scope=req.body.scope;
//     const name=req.body.name;

   
//     let feed;
//     feed="Hi";
//     if(scope==="RP"){
//       feed=knowledge+"\n\n"+question;
//     console.log('in if')
//     console.log('feed',feed);
//     }
  
//     else if(scope==="GR"){
//      // console.log('in else')
//       //const question="You are the manager, based on the employee's self-comment and their historical data, please generate a comprehensive and professional performance review comment like a direct reply that highlights the work that he/she has done and areas for improvement. Start the response with an acknowledgment of the employee's self-comment. Don't mention Thanks ";
//        fs.readFile('src/data/system.json', 'utf8', (err, info) => {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         const jsonData =  JSON.parse(info);
//         feed="It is for employee with name "+name+" This is the knowledge. "+knowledge+"\n\n"+JSON.stringify(jsonData)+"\n\n"+question+"Ensure your comment is with respect to the"+kra_name+"Return your response inform of json object having comment and rating fields. Rating is out of 5,possible ratings are 1,2,3,4,5. Start with the actual comment";   //Comment,System,Prompt
  
//     });

//     }
//     else if(scope==="IG"){
//       // console.log('in else')
//         fs.readFile('src/data/system.json', 'utf8', (err, info) => {
//          if (err) {
//              console.error(err);
//              return;
//          }
 
//          const jsonData =  JSON.parse(info);
//          feed="It is for employee with name "+name+" This is the knowledge. "+knowledge+"\n\n"+JSON.stringify(jsonData)+"\n\n"+question+"Summarize his/her entire work experiece";   //Comment,System,Prompt
//         // console.log("feed.rating ",feed.rating);
       
//         //console.log(feed);
 
//          // Now the variable 'jsonData' holds your JSON data and you can work with it.
//      });
 
//      }

     

//    console.log('total feed',feed);

//   setTimeout(async () => {
//     try {
//       const requestBody = {
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are an AI assistant that helps managers to rate the employees.",
//           },
//           {
//             role: "user",
//             content: feed,
//           },
//         ],
//         max_tokens: 100,
//         temperature: 0.7,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         top_p: 0.95,
//         stop: null,
//       };
  
//       const response = await axios({
//         method: "post",
//         url: 'https://azure-openai-service-teamintune.openai.azure.com/openai/deployments/gpt35-turbo/chat/completions?api-version=2024-02-15-preview',
//         headers: {
//           "Content-Type": "application/json",
//           "api-key": '514eae9e198148bf8d5e71c492158f02',
//         },
//         data: JSON.stringify(requestBody),
//       });
  
//       if (response.status !== 200) {
//         throw new Error("Network response was not ok");
//       }
  
//       res.json(messageBuilder(JSON.parse(response.data.choices[0].message.content),false,"Response from ai retrieved successfully"));
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//       console.error("Error details:", error.response.data);
     
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }, 5000); // 2000 milliseconds = 2 seconds

  
 
// };


exports.getAIResponse = async (req, res, next) => {

 // console.log('in get response');

  const kra_name=req.body.kra_name;
  const knowledge=req.body.knowledge;
  //const question=req.body.question;
  const scope=req.body.scope;
  const name=req.body.name;
  let feed;
  let question;

  if(scope==="RP"){
    question="Please rephrase this comment"
    feed=knowledge+"\n\n"+question;
  console.log('in if')
  console.log('feed',feed);
  }
  if(scope==="GR"){

    fs.readFile('src/data/system.json', 'utf8', (err, info) => {
      if (err) {
          console.error(err);
          return;
      }

      const jsonData =  JSON.parse(info);
      feed="It is for employee with name "+name+" This is the knowledge"+JSON.stringify(jsonData)+"\n\n"+"With respect to this"+kra_name+"acknowledge the comment written by the employee as a manager in a conversational tone"+"this is the comment"+knowledge+"Return your response inform of json object having comment and rating fields. Rating is out of 5,possible ratings are only 1,2,3,4,5. Start with the actual comment also add some improvement suggestions";   //Comment,System,Prompt

  });
   
  }

  if(scope==="OV"){
    fs.readFile('src/data/system.json', 'utf8', (err, info) => {
      if (err) {
          console.error(err);
          return;
      }

      const jsonData =  JSON.parse(info);
      feed="It is for employee with name "+name+" This is the knowledge"+JSON.stringify(jsonData)+"\n\n"+"With respect to the employee give a summary of his/her entire work experience, give those insights that's helpful to manager or organization on performance review";   //Comment,System,Prompt

  });
  }

  if(scope==="IN"){
    fs.readFile('src/data/system.json', 'utf8', (err, info) => {
      if (err) {
          console.error(err);
          return;
      }

      const jsonData =  JSON.parse(info);
      feed="It is for employee with name "+name+" This is the knowledge"+JSON.stringify(jsonData)+"\n\n"+"With respect to the employee give 2 lines of insights about the person in third person or conversational tone";   //Comment,System,Prompt

  });
  }



 setTimeout(async () => {
try {
  const requestBody = {
    messages: [
      {
        role: "system",
        content:
          "You are an AI assistant that helps managers to rate the employees.",
      },
      {
        role: "user",
        content: feed,
      },
    ],
    max_tokens: 800,
    temperature: 0.7,
    frequency_penalty: 0,
    presence_penalty: 0,
    top_p: 0.95,
    stop: null,
  };

  const response = await axios({
    method: "post",
    url: 'https://azure-openai-service-teamintune.openai.azure.com/openai/deployments/gpt35-turbo/chat/completions?api-version=2024-02-15-preview',
    headers: {
      "Content-Type": "application/json",
      "api-key": '514eae9e198148bf8d5e71c492158f02',
    },
    data: JSON.stringify(requestBody),
  });

  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }

 // console.log("API Response:", response.data.choices[0].message.content);
  res.json(messageBuilder(response.data.choices[0].message.content),false,"Response from ai retrieved successfully");
} catch (error) {
  console.error("There was a problem with the fetch operation:", error);
  res.status(500).json({ error: "Internal server error" });
}


},5000); 
}