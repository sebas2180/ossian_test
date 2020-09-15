# ossian_test


BD: mysql
    Dada a que solo existe la entidad image, solo se creo una tabla para esta.
    
BackEnd- laravel:

  image:
  
  rutas  api : routes\web.php
  
  controlador :app\Http\Controllers\imageController.php
  
  modelo :app\Models\User.php
  
  factory: database\factories\imageFactory.php
  
  bd  migration: database\migrations\2020_09_10_141943_image_migration.php
  
  test : tests\Feature\Http\Controllers\imageTest.php
  


