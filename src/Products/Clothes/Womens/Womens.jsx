const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1671826911765-6386652c2e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1690338235263-68f2c173b5cc?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tYW4lMjBzaGlydHN8ZW58MHwwfHx8MTcyMDM1Mzg2OXwx&ixlib=rb-4.0.3',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY_x5UY2MTeksdEnKcTZ-_ce5VHo4bPdKIQ&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdM5nc8WeseD5BvyNNL5k-eDqkog6xIAyjA&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WJiiPJGYz3Xd6LPmub-QUHg_eVa_t8XE7Q&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Sx17j8Kuy4YF-NhcN923uf4fRbfy8Lqe1Q&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
];

export default function Womens() {
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
