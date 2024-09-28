var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 1500],
    connect: true,
    range: {
        'min': 0,
        'max': 1500
    },
    tooltips: [true, true],
    format: {
        to: function (value) {
            return '$' + Math.round(value);
        },
        from: function (value) {
            return Number(value.replace('$', ''));
        }
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    document.getElementById('min-price').innerHTML = values[0];
    document.getElementById('max-price').innerHTML = values[1];
});
