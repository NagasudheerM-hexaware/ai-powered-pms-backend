function MessageBuilder(result, isError, message) {

    let payload = {
      
      result: result,
      error: isError,
      message: message,
    };
    
    return payload;
  }
  
  module.exports = MessageBuilder;