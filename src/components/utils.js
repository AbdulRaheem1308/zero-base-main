export function isURL(value) {
    return (
        value.startsWith("http://") ||
        value.startsWith("https://") ||
        value.startsWith("data:image")
    );
}

// export function getDynamoValue(sharedItems, valueType, value) {
//     if(value && value.startsWith('{') ){
//         console.log(value , value?.startsWith('{') , sharedItems.getValues, value?.slice(1, -1), sharedItems.getValues(value?.slice(1, -1)))
//         return sharedItems.getValues(value.slice(1, -1));}
//     return value;
// }
