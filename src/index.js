import * as Utils from "./utils";
import * as Data from "./data";

const [user1, user2, user3, user4, user5] = Data.users;

console.log("hasId\n=================================");
console.log(user1);
console.log("¿Tiene ID? :" + Utils.hasId(user1));
console.log(user2);
console.log("¿Tiene ID? :" + Utils.hasId(user2));
console.log(user3);
console.log("¿Tiene ID? :" + Utils.hasId(user3));
console.log(user4);
console.log("¿Tiene ID? :" + Utils.hasId(user4));
console.log(user5);
console.log("¿Tiene ID? :" + Utils.hasId(user5));
console.log("=================================\n\n\n\n\n");

console.log("head\n=================================");
console.log("Array de entrada: ", Data.users);
console.log("Primer elemento: ", Utils.head(Data.users));
console.log("=================================\n\n\n\n\n");

console.log("tail\n=================================");
console.log("Array de entrada: ", Data.users);
console.log("Todos los elementos menos el primero: ",Utils.tail(Data.users));
console.log("=================================\n\n\n\n\n");

console.log("swapFirstToLast\n=================================");
console.log("Array de entrada: ", Data.users);
console.log("Primer elemento en última posición: ",Utils.swapFirstToLast(Data.users));
console.log("=================================\n\n\n\n\n");

console.log("excludeId\n=================================");
console.log("Objeto de entrada: ", user1, "Objeto sin id:", Utils.excludeId(user1));
console.log("Objeto de entrada sin modificar: ", user1);
console.log("Objeto de entrada: ", user2, "Objeto sin id:", Utils.excludeId(user2));
console.log("Objeto de entrada sin modificar: ", user2);
console.log("Objeto de entrada: ", user3, "Objeto sin id:", Utils.excludeId(user3));
console.log("Objeto de entrada sin modificar: ", user3);
console.log("Objeto de entrada: ", user4, "Objeto sin id:", Utils.excludeId(user4));
console.log("Objeto de entrada sin modificar: ", user4);
console.log("Objeto de entrada: ", user5, "Objeto sin id:", Utils.excludeId(user5));
console.log("Objeto de entrada sin modificar: ", user5);
console.log("=================================\n\n\n\n\n");

console.log("wordsStartingWithA\n=================================");
console.log("String array original: ", Data.countries);
console.log("String que empiezan por \"a\" :", Utils.wordsStartingWithA(Data.countries));
console.log("=================================\n\n\n\n\n");

console.log("concat\n=================================");
console.log("Strings que se le pasan a la función como argumento: ", ...Data.countries);
console.log("Único string concatenado:", Utils.concat(...Data.countries));
console.log("=================================\n\n\n\n\n");

console.log("multArray\n=================================");
console.log("Array numérico con el que vamos a generar otro cuyos elementos seran el resultado de multiplicar los del primero por 2: ", Data.numbers);
console.log(Utils.multArray(Data.numbers,2));
console.log("=================================\n\n\n\n\n");

console.log("calcMult\n=================================");
console.log("Números que se van a pasar como argumento a la función: ", ...Data.numbers);
console.log("Resultado de multiplicar todos los numeros pasados como argumento: ",Utils.calcMult(...Data.numbers));
console.log("=================================\n\n\n\n\n");

console.log("swapFirstSecond\n=================================");
console.log("Array original: ",Data.countriesBeginningWithE);
console.log("Intercambio del primer elemento con el segundo: ", Utils.swapFirstSecond(Data.countriesBeginningWithE));
console.log("Array original: ",Data.countriesBeginningWithE);
console.log("=================================\n\n\n\n\n");

console.log("firstEqual\n=================================");
console.log("Lista de países: ", ...Data.countries);
console.log("¿Empizan todos por la letra \"e\"? :", Utils.firstEqual("e", ...Data.countries));
console.log("Lista de países: ", ...Data.countriesBeginningWithE);
console.log("¿Empizan todos por la letra \"e\"? :", Utils.firstEqual("e", ...Data.countriesBeginningWithE));
console.log("=================================\n\n\n\n\n");

console.log("longest\n=================================");
console.log("Array de paises que empiezan con \"e\" :", Data.countriesBeginningWithE);
console.log("Array de paises que empiezan con \"f\" :", Data.countriesBeginningWithF);
console.log("El array más largo es :", Utils.longest(Data.countriesBeginningWithF, Data.countriesBeginningWithE));
console.log("=================================\n\n\n\n\n");

console.log("searchInStringV1\n=================================");
console.log("En la palabra \"Alambrada\" aparece la letra \"a\" : " + Utils.searchInStringV1("Alambrada", "a") + " veces");
console.log("En la palabra \"Excelentemente\" aparece la letra \"e\" : " + Utils.searchInStringV1("Excelentemente", "e") + " veces");
console.log("=================================\n\n\n\n\n");

console.log("searchInStringV2\n=================================");
console.log("En la palabra \"Alambrada\" aparece la letra \"a\" : " + Utils.searchInStringV2("Alambrada", "a") + " veces");
console.log("En la palabra \"Excelentemente\" aparece la letra \"e\" : " + Utils.searchInStringV2("Excelentemente", "e") + " veces");
console.log("=================================\n\n\n\n\n");

console.log("sortCharacters\n=================================");
const stringToSort = "zAfLser";
console.log("Cadena a ordenar \"" + stringToSort + "\"");
console.log("Cadena ordenada \"" + Utils.sortCharacters(stringToSort) + "\"");
console.log("Cadena original \"" + stringToSort + "\"");
console.log("=================================\n\n\n\n\n");

console.log("shout\n=================================");
console.log("Cadenas a concatenar: ", ...Data.stringToConcatenate);
console.log("Cadena resultante: \"" + Utils.shout(...Data.stringToConcatenate) + "\"");
console.log("=================================\n\n\n\n\n");

console.log("getVatShoppingCart\n=================================");
console.log("Cesta de la compra: ", Data.shoppingCart);
console.log("Cesta con el IVA calculado por producto : ", Utils.getVatShoppingCart(Data.shoppingCart));
console.log("=================================\n\n\n\n\n");

console.log("sortShoppingCartByUnits\n=================================");
console.log("Cesta de la compra: ", Data.shoppingCart);
console.log("Cesta de la compra ordenada por unidades de producto en descendente : ", Utils.sortShoppingCartByUnits(Data.shoppingCart));
console.log("=================================\n\n\n\n\n");

console.log("totalSpentGivenCategory\n=================================");
console.log("Cesta de la compra: ", Data.shoppingCart);
console.log("Total de Droguería: ", Utils.totalSpentGivenCategory(Data.shoppingCart,"Droguería"));
console.log("=================================\n\n\n\n\n");

console.log("showShoppingCart\n=================================");
console.log("Cesta de la compra: ", Data.shoppingCart);
Utils.showShoppingCart(Data.shoppingCart);
console.log("=================================\n\n\n\n\n");