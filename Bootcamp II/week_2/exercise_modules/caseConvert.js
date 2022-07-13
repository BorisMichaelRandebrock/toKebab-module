export const toLowerCamelCase = (text) => {
  if (text.match(/[A-Z]/)) {
    return "The text contains capital letters";
  }
  if (text.match(/[_]/)) {
    return "The text contains underscores";
  }
  if (text === "") {
    return "You must provide some text";
  }
  let newText = text.split("-");
  let capital = newText.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  capital[0] = capital[0].toLowerCase();
  const newCamel = capital.join("");
  console.log(newCamel);
};

toLowerCamelCase("some-text-in-kebab-case");

export const toSnakeCase = (text) => {
  if (text[0].match(/[A-Z]/) === text[0]) {
    return "The text starts with a capital letter";
  }
  if (text.includes("-")) {
    return "The text contains dashes";
  }
  if (text.includes("_")) {
    return "The text contains underscores";
  }
  if (text === "") {
    return "You must provide some text";
  }

  const regularExpression = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
  const separatedWords = text.match(regularExpression);
  return separatedWords.join("_");
};
toSnakeCase("someTextInCamel");

export const toKebabCase = (lowerCamelCaseText) => {
  if (lowerCamelCaseText === "") {
    return "You must provide some text";
  }
  if (lowerCamelCaseText[0].toUpperCase() === lowerCamelCaseText[0]) {
    return "The text starts with a capital letter";
  }
  if (lowerCamelCaseText.includes("-")) {
    return "The text contains dashes";
  }
  if (lowerCamelCaseText.includes("_")) {
    return "The text contains underscores";
  }

  const regularExpression = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
  const separatedWordsArray = lowerCamelCaseText.match(regularExpression);
  return separatedWordsArray.join("_");
};

describe("Given toSnakeCase function", () => {
  describe("When it recieves the text 'holaMundo'", () => {
    test("Then it should return the text 'hola_Mundo", () => {
      const textLowerCamelCase = "holaMundo";
      const expectedText = "hola_Mundo";

      const textSnakeCase = toSnakeCase(textLowerCamelCase);

      expect(textSnakeCase).toBe(expectedText);
    });
  });

  describe("When it recieves nothing", () => {
    test("Then it should return the text 'You must provide some text", () => {
      const noTextProvided = "";
      const expectedMessage = "You must provide some text";

      const expectedTextResult = toSnakeCase(noTextProvided);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });

  describe("When it recieves the text 'Ahora'", () => {
    test("Then it should return the text 'The text starts with a capital letter", () => {
      const textStartsWithCapitalLetter = "Ahora";
      const expectedMessage = "The text starts with a capital letter";

      const expectedTestResult = toSnakeCase(textStartsWithCapitalLetter);

      expect(expectedTestResult).toBe(expectedMessage);
    });
  });

  describe("When it recieves the text 'ahora-Si'", () => {
    test("Then it should return the text 'The text contains dashes", () => {
      const textWithDashes = "ahora-Si";
      const expectedMessage = "The text contains dashes";

      const expectedTextResult = toSnakeCase(textWithDashes);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });
});
// expresiones regulares
RegExp.prototype.test = function (str) {
  return !!str.match(this);
};
