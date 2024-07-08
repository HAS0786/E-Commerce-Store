const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1542351967-d5ae722fed71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2024/05/21/21/54/ai-generated-8779205_640.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_640.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/01/08/18/26/startup-593334_640.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
];

export default function Laptops() {
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
