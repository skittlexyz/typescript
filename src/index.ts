interface Template {
    name: string
    description: string
    url: string
}

function checkTemplate(template: Template) {
    console.log(template);
}

const typescriptTemplate: Template = {
    name: "Typescript",
    description: "A backend template for Typescript with tsx and tsup.",
    url: "https://github.com/skittlexyz/typescript"
}

checkTemplate(typescriptTemplate);