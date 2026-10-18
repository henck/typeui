/**
 * ToastService is used to create Toasts.
 *
 * To create a Toast, do
 *
 *   ToastService.toast(ReactNode, duration in ms[optional])
 */
class ToastService {
    /**
     * Subscribe a ToastContainer to the ToastService.
     * There can only be a single subscriber (it does not
     * make sense to show toasts in more than one place).
     */
    static subscribe(subscriber) {
        ToastService.subscriber = subscriber;
    }
    /**
     * Create a new Toast.
     * @param message Message to show. This is a React Node.
     * @param duration (Optional) Toast duration in ms.
     */
    static toast(message, duration) {
        // Toasts are not created if there is no ToastContainer subscribed
        // to the ToastService.
        if (ToastService.subscriber == null)
            return;
        ToastService.subscriber.toast(message, duration);
    }
}
ToastService.subscriber = null;
export { ToastService };
