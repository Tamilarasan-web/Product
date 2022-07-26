<?php

namespace App\Http\Controllers\Product;

use DB;
use Response;
use App;
use Session;
use Exception;
use Config;
use Log;

use App\Libraries\AppUtils;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductRepository extends Controller
{
	public function doGetList($request)
		{

			$order_by_field = $request['order_by_field'];
            $order_by = $request['order_by'];

			$curPage        = $request->CurrentPageNumber;
            $recordPerPage  = $request->PageSize;

			$fields   = array('a.PRODUCT_ID as id',
		                      'a.PRODUCT_NAME as product_name',
		                      'a.PRODUCT_CODE as product_code',
		                      'a.CATEGORY as category',
		                      'a.IMG as img',
		                      );
			$query  =  DB::table('tbl_product as a')
			          ->orderBy($order_by_field, $order_by);

        $query = $this->doCheck_filter($request, $query);

	   if ($recordPerPage == 0)
        {
            $totalRows = 0;    
        } else{
            $totalRows = $query->count();
        }

        $query  = $query->skip($recordPerPage * ($curPage-1))
                        ->take($recordPerPage);

        $result     = $query->get($fields);                        

			return array('record_list'   =>  $result,
		                 'total_rows'    =>  $totalRows,
		             );
		}

	private function doCheck_filter($postData, $query)
	{

		if(isset($postData['filterParameters']['product_name']))
		{
			$query = $query->where('a.PRODUCT_NAME','like', "%{$postData['filterParameters']['product_name']}%");
		}

		if(isset($postData['filterParameters']['product_code']))
		{
			$query = $query->where('a.PRODUCT_CODE', 'LIKE', "%{$postData['filterParameters']['product_code']}%");
		}

		return $query;
	}

	public function doGetdata($id)
	{
		$fields    =   array('a.PRODUCT_ID as id',
                             'a.PRODUCT_CODE as product_code',
                             'a.PRODUCT_NAME as product_name',
                             'a.CATEGORY as category',
                             'a.IMG as img',
	                         );
		 $query   =  DB::table('tbl_product as a')
		                    ->where('a.PRODUCT_ID', $id);

		 $result  =  $query->first($fields);

		 return $result;
	}

	public function doGetItemDetailList($id)
	{
		$fields          =     array( 'a.ITEM_ID as item_id',
			                          'a.ITEM_NAME as item_name'
	                                  );
		$query  =  DB::table('tbl_items as a')
		                ->orderBy('a.ITEM_ID');

        $result     = $query->get($fields);

        return $result;
	}

	public function doSave($postData)
	{
        $id = isset($postData->id) ? $postData->id : 0;

		DB::beginTransaction();
		try
		{
			$bind_arr   =   array(
			                      'PRODUCT_NAME' => $postData['product_name'],
			                      'PRODUCT_CODE' => $postData['product_code'],
			                      'CATEGORY'     => $postData['category'],
			                      'IMG'          => $postData['img']
			                  );
			$upsert_id = $id;

			if($id>0)
			{
				DB::table('tbl_product')->where('PRODUCT_ID', '=', $id)->update($bind_arr);
			} else
			{
				$upsert_id = DB::table('tbl_product')->insertGetId($bind_arr);
			}
			DB::commit();

            return Response::json(array('error'=> 0, 'id'=> $upsert_id));			
		} catch(Exception $e){
			DB::rollback();
            return response()->json(['error'=> 1, "e_msg"=>$e, 'message' => 'Record not added/updated successfully.'], 400);	
		}
	}

	public function doDelete($request)
	{
		$id = isset($request->id) ? $request->id : 0;

		if($id > 0)
		{
			DB::beginTransaction();			
				try
				{
					DB::table('tbl_product')->whereIn('PRODUCT_ID', explode(",", $id))->delete();

					DB::commit();
					return response()->json(['error'=> 0, 'message' => 'Record deleted successfully.'], 200);
				}catch(Exception $e){
					DB::rollback();
                return response()->json(['error'=>1, 'message' => 'Record deleted not successfully.'], 400);		
				}			
		}
            return response()->json(['error'=>1, 'message' => 'Record deleted not successfully.'], 400);		
	}

}