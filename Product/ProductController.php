<?php

namespace App\Http\Controllers\Product;

use Illuminate\Http\Request;

use Validator;
use Response;
use DB;
use Session;

use App\Http\Controllers\Controller;

use App\Http\Controllers\Product\ProductRepository;
use App\Http\Controllers\Item\ItemRepository;


/***
 **
 */
class ProductController extends Controller
{
    protected $repository;

    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function GetList(Request $request)
    {
        $data = $this->repository->doGetList($request);

        return Response::json(array('error' => 0,
                                    'record_list' => $data['record_list'],
                                    'total_rows' => $data['total_rows']
                                ));
    }

    public function doGetData(Request $request)
    {
        $id = isset($request->id) ? $request->id : 0;

        $data = $this->repository->doGetData($id);
        // $items = $this->repository->doGetItemDetailList($id);

        return Response::json(array(
                                    'error' => 0,
                                    'data' => $data,
                                    // 'items' => $items
                                ));
    }

    private function validation($data)
    {
        $rules  =  array(
                'id'        => 'required',
            );
        return $validator = Validator::make($data, $rules);
    }

    public function doSave(Request $request)
    {
        $validator = $this->validation($request-> input());
        if($validator-> fails()) {
            return response()->json(['message' => $validator->message()], 400);
        }
        $data = $this->repository->doSave($request);

        return $data;
    }

    public function doDelete(Request $request)
    {
        return $this->repository->doDelete($request);
    }
}