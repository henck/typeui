/// <reference types="react" />
import { Size } from '../Types';
interface IButtonOrProps {
    /** @ignore */
    className?: string;
    /**
     * Sets button size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`.
     * @default medium
     */
    size?: Size;
}
declare const ButtonOr: (props: IButtonOrProps) => JSX.Element;
export { ButtonOr, IButtonOrProps };
