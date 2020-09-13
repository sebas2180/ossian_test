<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\image as image;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\imageCreateRequest as imageRequest;

use Illuminate\Database\Eloquent\Model;
use GuzzleHttp\Client;

class imageController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'=> 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
            'Access-Control-Allow-Origin' => '*'
        ];

        $response = image::all();

        return \response($response, 200, $headers);
        
       // return response()->json(['status'=>200,'Array'=>$response]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $array_imagenes;
        $client = new Client([
            'base_uri'=> 'http://internal.ossian.tech/api/',
            'time_out' => 2.0,
        ]);
        $response = $client->request('GET','Sample');
       $datos_extraidos =    json_decode( $response->getBody()->getContents(),true);
        $iterator = 0;
        foreach ($datos_extraidos as $name => $data) {
            if($iterator == 3) {
                $iterator_b =0;
                    foreach ($data as $key => $unidad) {
                        $new_image = new image();
                                                // echo($unidad);
                        $new_image = new image;
                        $new_image->title= $unidad['title'] ;
                        $new_image->category= $unidad['category'] ;
                        $new_image->description= $unidad['description'] ;
                        $new_image->url= $unidad['url'] ;
                        try{ 
                            $new_image -> save();
                        }catch( Excepcion $e) {
                            return response()->json(['status' => 400, 'state' => 'Hubo un problema al cargar las img.']);
                        }        
                    }
            }
            $iterator ++;
            
        }
        return response()->json(['status' => 200, 'state' => 'Operación exitosa.']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['status'=>'ok','data'=>Image::find($id)],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
       $imageUpdate = image::find($request->get('id'));
       if( $imageUpdate ) { 
           $imageUpdate['url'] = $request->get('url');
           $imageUpdate['category'] = $request->get('category');
           $imageUpdate['description'] = $request->get('description');
           $imageUpdate['title'] = $request->get('title');
          $result =  $imageUpdate->save();
          if ($result  == 1) {
            $response  =['status'=>200,'state'=>'Imagen actualizada'];
            return response()->json($response,200);
          } else {
               return response()->json(['status'=>'No se pudo actualizar'],400);
          }
       } else {
            $response  =['status'=>500,'state'=>'ID no encontrado.'];
            return response()->json($response, 500);
       }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $sucess = DB::table('image')->where('id', '=', $id)->delete();
            if ( $sucess ) {
                $response  = ['status'=>200,'state'=>'Borrado exitoso.'];
                return response()->json($response, 200);
            } else {
                $response  = ['status'=>400,'state'=>'Borrado fallido.'];
                return response()->json($response, 200);
            }
        } catch(Exception $e) {
            $response  = ['status'=>500,'state'=>'Hubo un error.'];
            return response()->json($response, 200);
        }
    }
    public function destroyAll()
    {
        DB::table('image')->truncate();
        return response()->json(['status'=>200,'state'=>'Borrado exitoso.']);
    }

}
