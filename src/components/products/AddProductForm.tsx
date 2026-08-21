"use client"

import { addProduct } from "@/actions/add-product-action";
import { ReactNode, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddProductForm({children}: {children: ReactNode}) {
  const [state, dispatch] = useActionState(addProduct, {
    errors: [],
    success: ''
  });

  useEffect(() => {
    if(state.errors){
      state.errors.forEach(error => toast.error(error))
    }

    if(state.success){
      toast.success(state.success);
    }
  }, [state]);

  return (
    <form action={dispatch}>
      {children}

      <input 
        type="submit" 
        value="Agregar Producto" 
        className="bg-green-400 rounded font-bold py-2 w-full cursor-pointer mt-5" />
    </form>
  )
}
