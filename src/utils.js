const hasId = ({id}) => id ? true : false;

const head = ([first]) => first;

const tail = ([, ...restOfElements]) => restOfElements;

const swapFirstToLast = ([first, ...restOfElements]) => [...restOfElements, first];

const excludeId = ({first_name, last_name}) => { return {first_name, last_name}; };

const wordsStartingWithA = words => words.filter((word) => { const [first] = word; return first === "a" || first === "A" });

const concat = (...characterStrings) => characterStrings.join("|");

const multArray = (numberArray, multiplier) => numberArray.map(number => number * multiplier);

const calcMult = (...numbers) => [...numbers].reduce((product,number) => product * number, 1);

const swapFirstSecond = ([first,second,...remainder]) => [second,first,...remainder];

const firstEqual = (letter, ...characterStrings) => characterStrings.every((characterString) => { 
    const [first] = characterString; return (first === letter.toLowerCase() || first === letter.toUpperCase()) ? true : false;
});

const longest = (...arrays) => {
    const maxLength = arrays.reduce((maxLength, array) => array.length > maxLength ? maxLength = array.length : maxLength, 0);
    return arrays.find(array => array.length === maxLength);
};

const searchInStringV1 = (characterString, characterToFind) => 
    Array.from(characterString).reduce((characterOcurrences, character) => 
        (character === characterToFind.toLowerCase() || character === characterToFind.toUpperCase()) ? ++ characterOcurrences : characterOcurrences, 0);

const searchInStringV2 = (characterString, characterToFind) =>
    Array.from(characterString).filter((character) => 
        (character === characterToFind.toLowerCase() || character === characterToFind.toUpperCase()) ? true : false).length;

const sortCharacters = (characterString) => 
    Array.from(characterString).sort((memberA, memberB) => {
        memberA = memberA.toLowerCase();
        memberB = memberB.toLowerCase();

        if(memberA < memberB){
            return -1;
        }
        else if(memberA > memberB){
            return 1;
        }
        else{
            return 0;
        }
    }).join("");

const shout = (...stringArray) => "¡¡¡" + [...stringArray].map(string => string.toUpperCase()).join(" ") + "!!!";

const getVatShoppingCart = (shoppingCart) => shoppingCart.map((product) => {
    const {price, units, ...remainderProperties} = product;
    const vat = (price * units) * 0.21;
    return {...remainderProperties, price, units, vat};
})

const sortShoppingCartByUnits = (shoppingCart) => [...shoppingCart].sort((productA, productB) => {
    const {units: unitsA} = productA;
    const {units: unitsB} = productB;

    if(unitsA > unitsB){
        return -1;
    }
    else if(unitsA < unitsB){
        return 1;
    }
    else{
        return 0;
    }
});

const totalSpentGivenCategory = (shoppingCart, productCategory) => {
    return shoppingCart.filter((product) => 
    {
        const {category} = product; 
        return category === productCategory;
    }).reduce((total, product) => {
        const {price, units} = product;
        return total += price * units;
    }, 0);
}

const showShoppingCart = (shoppingCart) => [...shoppingCart].sort((productA, productB) => {
    const {category: categoryA} = productA;
    const {category: categoryB} = productB;

    if(categoryA.toLowerCase() < categoryB.toLowerCase()){
        return -1;
    }
    else if(categoryA.toLowerCase() > categoryB.toLowerCase()){
        return 1;
    }
    else{
        return 0;
    }
}).map((productItem) => { const {product, price, units} = productItem; console.log(product + " -> " + (price * units) + " €"); });

export {hasId, head, tail, swapFirstToLast, excludeId, wordsStartingWithA, concat, multArray, calcMult, swapFirstSecond, firstEqual, longest, 
        searchInStringV1, searchInStringV2, sortCharacters, shout, getVatShoppingCart, sortShoppingCartByUnits, totalSpentGivenCategory, showShoppingCart};