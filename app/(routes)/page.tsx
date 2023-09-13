import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("cd81822f-8da1-4369-a279-5a239121a561");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}
