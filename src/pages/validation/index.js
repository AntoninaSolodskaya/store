export const validate = values => {
  
    const errors = {}
  
    if (!values.title) {
      errors.title = 'Required'
    }else if (values.title.length < 4) {
      errors.title = "must be at least 4 characters!";
    }
    if (!values.price) {
      errors.price = 'Required'
    }else if (isNaN(Number(values.price))) {
      errors.price = 'Must be a number'
    }else if (Number(values.price) < 2) {
      errors.price = 'Sorry, price must be bigger'
    }
    
    if (!values.description || !values.description.length) {
        errors.description = 'At least one member must be entered' 
      } else {
        const descriptionArrayErrors = []
        values.description.forEach((description, descriptionIndex) => {
          const descriptionErrors = {}
          if (!description || !description.item) {
            descriptionErrors.item = 'Required'
            descriptionArrayErrors[descriptionIndex] = descriptionErrors
          }
          if (!description || !description.characters) {
            descriptionErrors.characters = 'Required'
            descriptionArrayErrors[descriptionIndex] = descriptionErrors
          }
        })
        if (descriptionArrayErrors.length) {
          errors.description = descriptionArrayErrors
        }
    }
    return errors
  }
  
  export const required = value =>
    value ? undefined : 'Value is required';
  