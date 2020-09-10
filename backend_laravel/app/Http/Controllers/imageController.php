<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\image as image;
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
        return image::all();
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
    public function updateAll()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
