<?php

namespace App\Services;

use App\Http\Requests\ItemCategoryRequest;
use Exception;
use Illuminate\Support\Facades\Log;

/**
 * Class ItemCategoryService.
 */
class ItemCategoryService
{
    public function store(ItemCategoryRequest $request)
    {
        try {
            Log::info($request);
            // Log::info("ee", [$request->all()]);
        } catch (Exception $e) {
            //throw $th;

        }
    }
}
