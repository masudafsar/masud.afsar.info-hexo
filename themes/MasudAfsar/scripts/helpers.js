'use strict';
var jMoment = require('moment-jalaali'); // https://github.com/jalaali/moment-jalaali

hexo.extend.helper.register('jmoment', function (args) {
    jMoment.loadPersian();
    return jMoment(args);
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
