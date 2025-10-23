<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ItemCategoryRequest;
use App\Http\Resources\ItemCategoryResource;
use App\Services\ItemCategoryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ItemCategoryController extends Controller
{
    protected ItemCategoryService $itemCategoryService;

    public function __construct(ItemCategoryService $itemCategoryService)
    {
        $this->itemCategoryService = $itemCategoryService;
    }
    public function index()
    {
      return Inertia::render('admin/itemCategory/itemCategory');
    }
    public function store(ItemCategoryRequest $request) 
    {
        try {
            return $this->itemCategoryService->store($request);
        } catch (\Exception $e) {
            Log::error('Error creating Item Category: ' . $e->getMessage());
            return response(['message' => 'Failed to create Item Category'], 500);
        }

    }
}
