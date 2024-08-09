import React from "react";

type ProductDetailProps = {
    params: {
        id: string;
    };
};

const ProductDetail = async ({ params }: ProductDetailProps) => {
    const { id } = params;
    return (
        <div>
            <h1>ProductDetail - {id}</h1>
        </div>
    );
};

export default ProductDetail;