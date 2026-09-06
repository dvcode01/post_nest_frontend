import CouponsTable from "@/src/components/coupons/CouponsTable";
import Heading from "@/src/components/ui/Heading";
import { CouponsResponseApiSchema } from "@/src/schemas/schemas";
import Link from "next/link";

async function getCoupons() {
  const url = `${process.env.API_URL}/coupons`;
  const req = await fetch(url);

  const json = await req.json();
  const coupons = CouponsResponseApiSchema.parse(json);
  return coupons;
}

export default async function CouponsPage() {
  const coupons = await getCoupons();

  return (
    <>
      <Link href={'/admin/coupons/new'} className="bg-green-400 rounded font-bold py-2 px-10">
        Nuevo Cupón
      </Link>

      <Heading>Administra tus Cupones</Heading>

      <CouponsTable coupons={coupons} />
    </>
  )
}
