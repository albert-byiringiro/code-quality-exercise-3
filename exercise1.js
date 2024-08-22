const flattenArray = (array) => {
    const newArr = []
    for (let element of array) {
        if (Array.isArray(element)) {
            const innerArr = flattenArray(element);
            for (let innerEl of innerArr) {
                newArr.push(innerEl)
            }
        } else {
            newArr.push(element)
        }
    }
    return newArr;
}