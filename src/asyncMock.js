const products = [
    {
        id:1,
        name: "Xiaomi 10T",
        price: 1000,
        category: "Tablets",
        image: "https://cdn.mos.cms.futurecdn.net/oQ4yRmV6RrcqYS2Re6dhpB-1024-80.jpg",
        stock: 25,
        description: "Descripcion de Xiami Diez"
    },
    {
        id:2,
        name: "Xiaomi 12",
        price: 1200,
        category: "celulares",
        image: "https://media.jumiadeals.com/ci_live/e446dc2f7d63ffc7e482bf9.desktop-gallery-large.jpg",
        stock: 6,
        description: "Descripcion de Xiami 12"
    },
    {
        id:3,
        name: "Sansumg S21",
        price: 1100,
        category: "celulares",
        image: "https://la-phony.com/wp-content/uploads/2021/05/samsung-galaxy-s21-plus.png",
        stock: 12,
        description: "Descripcion de Xiami 12"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = parseInt(productId); 
            resolve(products.find(prod => prod.id === id)); 
        }, 500);
    });
};
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
};