const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1678218594243-5ad331947662?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHNoaXJ0cyUyMG1lbnxlbnwwfDB8fHwxNzIwMzUzMzIzfDE&ixlib=rb-4.0.3',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1714568398464-fa1006821617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnRzJTIwbWVufGVufDB8fDB8fHw%3D',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/01/07/18/13/shirts-591751_640.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2013/05/30/02/42/tie-114607_640.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2018/10/10/14/24/shirt-3737407_640.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
];

export default function Mens() {
    return (
        <div className="overflow-hidden">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {products.map((product) => (
                    <div key={product.id} className="group relative border-2 border-gray-500 p-2">
                        <div className="aspect-w-1 aspect-h-1 w-full h-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-64 w-64 object-cover object-center"
                            />
                        </div>
                        <div className="mt-2 flex justify-between text-sm">
                            <div>
                                <h3 className="text-gray-700">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-gray-500">{product.color}</p>
                            </div>
                            <p className="font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
