StartupEvents.registry("block", (event) => {
    event.create("basalt_gravel")
    .displayName("Basalt Gravel")
    .hardness(0.6)
    .resistance(0.6)
    .gravelSoundType()
    .requiresTool(false)
    .tagBlock("mineable/shovel")
    .textureAll('kubejs:block/basalt_gravel')
})