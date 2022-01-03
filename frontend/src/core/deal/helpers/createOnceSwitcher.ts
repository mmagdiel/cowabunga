function createOnceSwitcher(valueObject, DEFAULT) {
  return key => [key, valueObject?.[key]] || [DEFAULT, valueObject[DEFAULT]]
}
export { createOnceSwitcher }
