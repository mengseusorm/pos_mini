<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ItemCategoryRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ItemCategoryController extends Controller
{
    public function index()
    {
      return Inertia::render('admin/itemCategory/itemCategory');
    }
    public function store(ItemCategoryRequest $request)
    {
        Log::info($request);
    }
}
