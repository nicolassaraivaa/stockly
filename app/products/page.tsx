import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import AddProductButton from "./_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/ui/header";
import { getProducts } from "../_data_acess/product/get-product";

// Essa página será montada uma vez e reutilizada (SSG), podendo ser incrementada de forma regenerativa (ISR)
export const dynamic = "force-static";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <AddProductButton />
        </HeaderRight>
      </Header>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
