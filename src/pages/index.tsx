import Categories from "@components/categories/categories.component";
import Layout from "@components/layout/layout.component";
import ProductModal from "@components/product-modal/product-modal.component";
import Modal from "@components/product-modal/product-modal.component";
import ViewedProduct from "@components/viewed-product/viewed-product.component";

export default function () {
    return (
        <Layout>
            <Categories />
            <h2 className="text-white text-2xl mt-20 font-bold">
                Previously viewed
            </h2>
            <div className="bg-accent-dark mt-10 p-6 rounded-3xl flex items-center space-x-20">
                <ViewedProduct />
                <ViewedProduct />
                <ViewedProduct />
            </div>
            <ProductModal isOpen={true} />
        </Layout>
    );
}
