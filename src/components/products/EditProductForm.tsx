"use client"

import { useRouter } from "next/navigation";
import { ReactNode, useActionState } from "react";
import { toast } from "react-toastify";

export default function EditProductForm({children}: {children: ReactNode}) {
  const router = useRouter();
 

  return (
    <form>
      {children}

      <input
        type="submit"
        value="Guardar Cambios"
        className="bg-green-400 rounded font-bold py-2 w-full cursor-pointer mt-5" />
    </form>
  )
}
