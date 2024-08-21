// https://kubejs.com/wiki/tutorials/recipes 
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'extendedcrafting:black_iron_block' }, // Arg 1: the filter
        'extendedcrafting:black_iron_block',    // Arg 2: the item to replace
        'createcasing:chorium_ingot'    // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
})