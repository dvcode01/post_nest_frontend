import { submitOrder } from "@/actions/submit-order-action"
import { useActionState, useEffect } from "react"
import { useStore } from "../../stores/store";
import { toast } from "react-toastify";

export default function SubmitOrderForm() {
    const total = useStore(state => state.total);
    const contents = useStore(state => state.contents);
    const coupon = useStore(state => state.coupon.name);

    const order = {
        total,
        contents, 
        coupon
    };

    const submitOrderWithData = submitOrder.bind(null, order);
    const [state, dispatch] = useActionState(submitOrderWithData, {
        errors: [],
        success: ''
    });

    useEffect(() => {
        if(state.success){
            toast.success(state.success);
        }

    }, [state]);

    return (
        <form action={dispatch}>
            <input 
                type="submit"
                className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase p-3" 
                value="Confirmar Compra" />
        </form>
    )
}
