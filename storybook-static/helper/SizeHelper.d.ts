import { Size } from "../controls/Types";
export declare type Ratio = 'minorSecond' | 'majorSecond' | 'minorThird' | 'majorThird' | 'perfectFourth' | 'augFourth' | 'perfectFifth' | 'minorSixth' | 'goldenSection' | 'majorSixth' | 'minorSeventh' | 'majorSeventh' | 'octave' | 'majorTenth' | 'majorEleventh' | 'majorTwelfth' | 'doubleOctave';
export declare function modularScale(steps: number, base: number, ratio: Ratio): number;
/**
 * Scale a Size to a local unit.
 * @param size Source size
 * @param base Base size, in local units
 * @param ratio ModularScale ratio to use
 */
export declare function scaleSize(size: Size, base: number, ratio: Ratio): number;
