function getRatioValue(ratio) {
    switch (ratio) {
        case 'minorSecond': return 1.067;
        case 'majorSecond': return 1.125;
        case 'minorThird': return 1.2;
        case 'majorThird': return 1.25;
        case 'perfectFourth': return 1.333;
        case 'augFourth': return 1.414;
        case 'perfectFifth': return 1.5;
        case 'minorSixth': return 1.6;
        case 'goldenSection': return 1.618;
        case 'majorSixth': return 1.667;
        case 'minorSeventh': return 1.778;
        case 'majorSeventh': return 1.875;
        case 'octave': return 2;
        case 'majorTenth': return 2.5;
        case 'majorEleventh': return 2.667;
        case 'majorTwelfth': return 3;
        case 'doubleOctave': return 4;
    }
}
;
export function modularScale(steps, base, ratio) {
    if (base === 0)
        base = 1;
    var ratioValue = getRatioValue(ratio);
    return base * Math.pow(ratioValue, steps);
}
/**
 * Convert a Size to a scale.
 *
 * If size is undefined, 'medium' will be assumed.
 */
function sizeToScale(size) {
    var sizeToScale = {
        'mini': -3,
        'tiny': -2,
        'small': -1,
        'medium': 0,
        'large': 1,
        'big': 2,
        'huge': 3,
        'massive': 4
    };
    if (!size)
        size = 'medium';
    return sizeToScale[size];
}
/**
 * Scale a Size to a local unit.
 * @param size Source size
 * @param base Base size, in local units
 * @param ratio ModularScale ratio to use
 */
export function scaleSize(size, base, ratio) {
    return modularScale(sizeToScale(size), base, ratio);
}
