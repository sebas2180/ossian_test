<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\image as imageModel;
class imageTest extends TestCase
{
    use RefreshDatabase;
  
             /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
   public function create_image_test()
   {
       $image = imageModel::factory()->make();
       $this->json('POST','/image/create', $image->toArray())
       ->assertStatus(422)
       ->assertJson($expectedResponse);

   }
   
       /** @test */
    public function create_image_fail_test()
    {
        $image = imageModel::factory()->make([
            'url' => 'slfsfs'
        ]);
        $response = $this->json('POST','/image/create', $image->toArray())
        ->assertStatus(422);
    }
    /** @test */
    public function import_image_from_api_()
    {
        $response = $this->get('/image/import');

        $response->assertStatus(200);
    }

    /** @test */
    public function list_all_images()
    {
        $response = $this->get('/image/list');

        $response->assertStatus(200);
    }
 

    /** @test */
    public function update_image()
    { 
        $image = imageModel::factory()->make();
        $response = $this->json('POST','/image/update', $image->toArray())
        ->assertStatus(200);
    }
    /** @test */
    public function image_delete() {
        $response = $this->call('DELETE', '/image/delete/1');
        $this->assertEquals(200, $response->getStatusCode());

    }
}
