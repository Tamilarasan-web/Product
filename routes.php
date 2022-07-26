<?php



	Route::post('/dash_list', 'App\Http\Controllers\Dashboard\DashboardController@index');

	Route::post('/dash_data', 'App\Http\Controllers\Dashboard\DashboardController@loadPreFormData');

	Route::post('/dash_store', 'App\Http\Controllers\Dashboard\DashboardController@store');

	Route::post('/dash_delete', 'App\Http\Controllers\Dashboard\DashboardController@destroy');

	Route::post('/dash_city' , 'App\Http\Controllers\Dashboard\DashboardController@getcity');


	Route::post('/stud_list','App\Http\Controllers\Student\StudentController@index');

	Route::post('/stud_data','App\Http\Controllers\Student\StudentController@loadData');

	Route::post('/stud_store', 'App\Http\Controllers\Student\StudentController@store');


	Route::post('/module_list', 'App\Http\Controllers\Module\ModuleController@index');

	Route::post('/module_data', 'App\Http\Controllers\Module\ModuleController@loadData');

	Route::post('/module_store', 'App\Http\Controllers\Module\ModuleController@store');


	Route::post('/vehicle_list','App\Http\Controllers\Vehicle\VehicleController@index');

	Route::post('/vehicle_data','App\Http\Controllers\Vehicle\VehicleController@loadData');

	Route::post('/vehicle_store','App\Http\Controllers\Vehicle\VehicleController@store');


	Route::post('/sales_list','App\Http\Controllers\SalesItem\SalesController@index');

	Route::post('/sales_data','App\Http\Controllers\SalesItem\SalesController@loadData');

	Route::post('/sales_itemdata','App\Http\Controllers\SalesItem\SalesController@loadFromData');
	
	Route::post('/sales_store','App\Http\Controllers\SalesItem\SalesController@store');

	Route::post('/sales_itemstore','App\Http\Controllers\SalesItem\SalesController@loadstore');

	Route::post('/sales_delete','App\Http\Controllers\SalesItem\SalesController@destroy');
	

	Route::post('/tab_item_list','App\Http\Controllers\Item\ItemController@GetList');
	
	Route::post('/tab_item_data','App\Http\Controllers\Item\ItemController@doGetdata');

	Route::post('/tab_item_save','App\Http\Controllers\Item\ItemController@doSave');

	Route::post('/tab_item_delete','App\Http\Controllers\Item\ItemController@doDelete');


	Route::post('/tbl_customer_list','App\Http\Controllers\Customer\CustomerController@GetList');

	Route::post('/tbl_customer_data','App\Http\Controllers\Customer\CustomerController@doGetData');

	Route::post('/tbl_customer_save','App\Http\Controllers\Customer\CustomerController@doSave');

	Route::post('/tbl_customer_delete', 'App\Http\Controllers\Customer\CustomerController@doDelete');


	Route::post('/tbl_sales_list', 'App\Http\Controllers\Sales\SalesControllers@doGetList');

	Route::post('/tbl_sales_data', 'App\Http\Controllers\Sales\SalesControllers@doGetdata');

	Route::post('/tbl_sales_save', 'App\Http\Controllers\Sales\SalesControllers@doSave');

	Route::post('/tbl_sales_delete','App\Http\Controllers\Sales\SalesControllers@doDelete');


	Route::post('tbl_product_list', 'App\Http\Controllers\Product\ProductController@GetList');

	Route::post('tbl_product_data', 'App\Http\Controllers\Product\ProductController@doGetdata');

	Route::post('tbl_product_save', 'App\Http\Controllers\Product\ProductController@doSave');

	Route::post('tbl_product_delete', 'App\Http\Controllers\Product\ProductController@doDelete');
	

	Route::post('tbl_user_list', 'App\Http\Controllers\User\UserController@doGetList');

