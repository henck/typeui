/// <reference types="react" />
interface IToastSubscriber {
    toast: (message: React.ReactNode, duration?: number) => void;
}
/**
 * ToastService is used to create Toasts.
 *
 * To create a Toast, do
 *
 *   ToastService.toast(ReactNode, duration in ms[optional])
 */
declare class ToastService {
    private static subscriber;
    /**
     * Subscribe a ToastContainer to the ToastService.
     * There can only be a single subscriber (it does not
     * make sense to show toasts in more than one place).
     */
    static subscribe(subscriber: IToastSubscriber): void;
    /**
     * Create a new Toast.
     * @param message Message to show. This is a React Node.
     * @param duration (Optional) Toast duration in ms.
     */
    static toast(message: React.ReactNode, duration?: number): void;
}
export { ToastService, IToastSubscriber };
