import Heading from "@/src/components/ui/Heading";
import { CouponsResponseApiSchema } from "@/src/schemas/schemas";

async function getCoupons(){
  const url = `${process.env.API_URL}/coupons`;
  const req = await fetch(url);

  const json = await req.json();
  const coupons = CouponsResponseApiSchema.parse(json);
  return coupons;
}

export default async function CouponsPage() {
  const coupons = await getCoupons();
  console.log(coupons);

  return (
    <>
      <Heading>Administra tus Cupones</Heading>
    </>
  )
}
