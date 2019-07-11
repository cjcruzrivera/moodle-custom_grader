<?php

require_once(__DIR__ . '/../classes/API/BaseAPI.php');
require_once(__DIR__ . '/api_views.php');
$api = new BaseAPI();
$api->get('/grader/:courseid', GetNormalizedGraderData::class);
$api->post('/grade/update', UpdateGrade::class);
$api->post('/category/update', UpdateCategory::class);
$api->post('/item/update', UpdateItem::class);
$api->post('/category/add', AddCategory::class);
$api->post('/item/add', AddItem::class);
$api->post('/partial_exam/add', AddPartialExam::class);
$api->get('/item/delete/:item_id', DeleteItem::class);
$api->get('/category/delete/:category_id', DeleteCategory::class);
$api->run();
