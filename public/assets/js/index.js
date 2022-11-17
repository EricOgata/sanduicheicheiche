$("#btn-gerador").on('click', generateSandwich);

function generateSandwich() {
    fetch('/public/assets/databases/ingredients.json')
        .then(responde => responde.json())
        .then(ingredients => {
            const sliderValue = $("#input-range").val();
            console.log(sliderValue);
            console.log(ingredients);
            $("#slider-container").addClass('hidden');
            $("#title").addClass('hidden');
            $("#btn-gerador").addClass('hidden');
            $("#burguer-loader").removeClass('hidden');
        })
}