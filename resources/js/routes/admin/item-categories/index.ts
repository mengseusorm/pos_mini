import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/item-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ItemCategoryController::index
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:13
 * @route '/admin/item-categories'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::store
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:17
 * @route '/admin/item-categories'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/item-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::store
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:17
 * @route '/admin/item-categories'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ItemCategoryController::store
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:17
 * @route '/admin/item-categories'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ItemCategoryController::store
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:17
 * @route '/admin/item-categories'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ItemCategoryController::store
 * @see app/Http/Controllers/Admin/ItemCategoryController.php:17
 * @route '/admin/item-categories'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const itemCategories = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
}

export default itemCategories