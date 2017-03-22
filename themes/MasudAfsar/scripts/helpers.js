'use strict';
var moment = require('moment');
var jMoment = require('moment-jalaali'); // https://github.com/jalaali/moment-jalaali

hexo.extend.helper.register('jmoment', function (args) {
    var d = moment(args).format();
    jMoment.loadPersian();
    return jMoment(d);
});

hexo.extend.helper.register('ToPersianDigit', function (string) {
    var persianDigitMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    };

    return string.replace(/\d/g, function (match) {
        return persianDigitMap[match];
    }).replace(/,/g, '،');
});

hexo.extend.helper.register('ToNbsp', function (string) {
    var persianDigitMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    };

    return string.replace(/\d/g, function (match) {
        return persianDigitMap[match];
    }).replace(/,/g, '،');
});

hexo.extend.helper.register('stringify', function (object) {
    var cache = [];
    var json = JSON.stringify(object, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
    cache = null;

    return json;
});
