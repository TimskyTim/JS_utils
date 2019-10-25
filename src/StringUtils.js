function isBlank(str) {
  if (str)
    return !(Boolean)(('' + str).trim());
  return true;
}