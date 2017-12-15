<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLatinNamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'latin_names',
            function (Blueprint $table) {
                $table->increments('id');
                $table->string('genus');
                $table->string('species');
                $table->string('common')->index();
                $table->timestamps();
            }
        );

        // Add the first set of latin names manually
        // We can create an admin interface to handle
        // adding more latin names later
        $this->seedTable();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('latin_names');
    }

    protected function seedTable()
    {
        $latinNames = [
            'Abies balsamea' => 'Balsam fir',
            'Acer nigrum' => 'Black maple',
            'Acer pensylvanicum' => 'Striped maple',
            'Acer rubrum' => 'Red maple ',
            'Acer saccharinum' => 'Silver maple',
            'Acer saccharum' => 'Sugar maple',
            'Acer spicatum' => 'Mountain maple',
            'Acer x freemanii' => 'Swamp maple',
            'Aesculus glabra' => 'Ohio buckeye',
            'Aesculus octandra' => 'Yellow buckeye',
            'Aesculus flava' => 'Yellow buckeye',
            'Aesculus parviflora' => 'Bottlebrush buckeye',
            'Aesculus pavia' => 'Red buckeye',
            'Alnus rugosa' => 'Speckled alder',
            'A. incana ssp. rugosa' => 'Speckled alder',
            'Asimina triloba' => 'Pawpaw',
            'Betula alleghaniensis' => 'Yellow birch',
            'Betula lenta' => 'Cherry birch',
            'Betula papyrifera' => 'Paper birch',
            'Betula pumila' => 'Dwarf birch',
            'Carpinus caroliniana' => 'American hornbeam',
            'Carya cordiformis' => 'Bitternut hickory',
            'Carya glabra' => 'Pignut hickory',
            'Carya laciniosa' => 'Shellbark hickory',
            'Carya ovalis' => 'Red hickory',
            'Carya ovata' => 'Shagbark hickory',
            'Carya tomentosa' => 'Mockernut hickory',
            'Carya alba' => 'Mockernut hickory',
            'Castanea dentata' => 'American chestnut',
            'Celtis occidentalis' => 'Hackberry',
            'Celtis tenuifolia' => 'Dwarf hackberry',
            'Cercis canadensis' => 'Redbud',
            'Cladrastis lutea' => 'Yellowwood',
            'Cladrastis kentuckea' => 'Yellowwood',
            'Cornus alternifolia' => 'Alternate-leaf dogwood',
            'Cornus florida' => 'Flowering dogwood',
            'Corylus cornuta' => 'Beaked hazel',
            'Crataegus spp.' => 'Hawthorn',
            'Fagus grandifolia' => 'American beech',
            'Fraxinus americana' => 'White ash',
            'Fraxinus nigra' => 'Black ash',
            'Fraxinus pennsylvanica' => 'Green ash',
            'Fraxinus profunda' => 'Pumpkin ash',
            'Fraxinus quadangulata' => 'Blue ash',
            'Gleditsia triacanthos' => 'Honey locust',
            'Gymnocladus dioicus' => 'Kentucky coffee tree',
            'Juglans cinerea' => 'Butternut',
            'Juglans nigra' => 'Black walnut',
            'Juniperus virginiana' => 'Red cedar',
            'Larix laricina' => 'Tamarack',
            'Liquidambar styraciflua' => 'Sweetgum',
            'Liriodendron tulipifera' => 'Tulip tree ',
            'Maclura pomifera' => 'Osage orange',
            'Magnolia acuminata' => 'Cucumber tree',
            'Magnolia grandiflora' => 'Southern magnolia',
            'Magnolia tripetala' => 'Umbrella magnolia',
            'Malus coronaria' => 'Wild crabapple',
            'Morus rubra' => 'Red mulberry',
            'Nyssa sylvatica' => 'Black gum ',
            'Ostrya virginiana' => 'Ironwood',
            'Picea glauca' => 'White spruce',
            'Picea mariana' => 'Black spruce',
            'Pinus banksiana' => 'Jack pine',
            'Pinus strobus' => 'White pine ',
            'Platanus occidentalis' => 'American sycamore',
            'Populus balsamifera' => 'Balsam poplar',
            'P. tacamahaca candicans' => 'Balsam poplar',
            'Populus deltoides' => 'Eastern cottonwood',
            'Populus grandidentata' => 'Largetooth aspen',
            'Populus tremuloides' => 'Trembling aspen',
            'Prunus americana' => 'American plum',
            'Prunus nigra' => 'Canada plum',
            'Prunus pensylvanica' => 'Pin Cherry',
            'Prunus serotina' => 'black cherry',
            'Ptelea trifoliata' => 'Hoptree',
            'Quercus alba' => 'White oak',
            'Quercus bicolor' => 'Swamp white oak',
            'Quercus ellipsoidalis' => 'Hill\'s oak',
            'Quercus macrocarpa' => 'Bur oak',
            'Quercus muehlenbergii' => 'Chinquapin oak',
            'Quercus palustris' => 'Pin Ooak',
            'Quercus prinoides' => 'Dwarf chinkapin oak',
            'Quercus rubra' => 'Red oak',
            'Quercus shumardii' => 'Shumard oak',
            'Quercus velutina' => 'Black oak',
            'Salix amygdaloides' => 'Peachleaf willow',
            'Salix petiolaris' => 'Slender willow',
            'Sassafras albidum' => 'Sassafras',
            'Sorbus americana' => 'American mountain-ash',
            'Thuja occidentalis' => 'White cedar',
            'Tilia americana' => 'Basswood',
            'Tsuga canadensis' => 'Hemlock',
            'Ulmus americana' => 'American or white elm',
            'Ulmus rubra' => 'Slippery elm',
            'Ulmus thomasii' => 'Rock elm',
            'Zanthoxylum americanum' => 'Prickly ash',
        ];

        foreach ($latinNames as $latin => $common) {
            $latinArray = explode(' ', $latin);
            $genus = $latinArray[0];
            $species = $latinArray[1];

            // Insert to the newly created table
            \App\LatinName::create(
                [
                    'genus' => $genus,
                    'species' => $species,
                    'common' => $common,
                ]
            );
        }
    }
}
