<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // The order matters here!
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ObservationsTableSeeder::class);
        $this->call(GroupsSeeder::class);
        $this->call(CollectionsTableSeeder::class);
    }
}
