<?php

use Illuminate\Database\Seeder;

use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $faker = \Faker\Factory::create();

        // // Create 50 product records
        // for ($i = 0; $i < 50; $i++) {
        //     Product::create([
        //         'title' => $faker->name,
        //         'description' => $faker->paragraph,
        //         'price' => $faker->randomNumber(2),
        //         'availability' => $faker->boolean(50)
        //     ]);
        // }

        $products = [
            [
                'title' => 'Product 1',
                'description' => 'lorem',
                'price' => 9,
                'availability' => 1,
                'featured_image' => 'https://picsum.photos/200/300'
            ],
            [
                'title' => 'Product 2',
                'description' => 'lorem',
                'price' => 9,
                'availability' => 1,
                'featured_image' => 'https://picsum.photos/200/300'
            ],
            [
                'title' => 'Product 3',
                'description' => 'lorem',
                'price' => 9,
                'availability' => 1,
                'featured_image' => 'https://picsum.photos/200/300'
            ],
            [
                'title' => 'Product 4',
                'description' => 'lorem',
                'price' => 9,
                'availability' => 1,
                'featured_image' => 'https://picsum.photos/200/300'
            ],
            [
                'title' => 'Product 5',
                'description' => 'lorem',
                'price' => 9,
                'availability' => 1,
                'featured_image' => 'https://picsum.photos/200/300'
            ]
        ];

        DB::table('products')->insert($products);

    }
}
