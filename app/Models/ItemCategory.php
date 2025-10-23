<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemCategory extends Model
{
    protected $table = 'item_catgories';
    protected $fillable = [
        'name',
        'status',
        'description',
    ];
    protected $casts = [
        'name' => 'string',
        'status' => 'integer',
        'description' => 'string',
    ];
}
