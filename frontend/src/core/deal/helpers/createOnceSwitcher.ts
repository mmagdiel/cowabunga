function createOnceSwitcher(valueObject, DEFAULT) {
  return key => {
    if (valueObject?.[key]) {
      return [key, valueObject?.[key]]
    }
    return [DEFAULT, valueObject[DEFAULT]]
  }
}

export { createOnceSwitcher }
