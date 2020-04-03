const compose = (...functions) => (component) => {
    return functions.reduceRight(
        (prevResult, func) => func(prevResult), component
    )
}