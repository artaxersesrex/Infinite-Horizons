// ['projecte:medium_covalence_dust', 'gtceu:diamond_dust', 'thermal:netherite_dust', 'mysticalagriculture:cognizant_dust', 'projecte:high_covalence_dust']
ServerEvents.recipes(event => {
    event.recipes.createMixing('projecte:high_covalence_dust',
        [
            'projecte:medium_covalence_dust',
            'gtceu:diamond_dust',
            'thermal:netherite_dust',
            'mysticalagriculture:cognizant_dust'
        ]
    )
})
