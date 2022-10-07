const validateEmail = ({ email, setEmailError }) => {
    const emailRegular =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular)
      ? setEmailError('Email not valid')
      : setEmailError('');
  };
  
  const validateName = ({ name, setNameError }) => {
    return name && name.length < 5
      ? setNameError('Full name is too short')
      : name && name.length > 50
      ? setNameError('Try to make it short and meanful')
      : setNameError('');
  };
  
  const validateMessage = ({ message, setMessageError }) => {
    return message && message.length < 5
      ? setMessageError('Message is too short')
      : message && message.length > 200
      ? setMessageError('Try to make it short and meanful')
      : setMessageError('');
  };
  
  export { validateEmail, validateName, validateMessage};