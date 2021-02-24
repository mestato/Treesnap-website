<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUuidColumnToFailedJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (! Schema::hasColumn('failed_jobs', 'uuid')) {
            Schema::table('failed_jobs', function (Blueprint $table) {
                $table->string('uuid')->after('id')->nullable()->unique();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('failed_jobs', 'uuid')) {
            Schema::table('failed_jobs', function (Blueprint $table) {
                $table->dropColumn('uuid');
            });
        }
    }
}
