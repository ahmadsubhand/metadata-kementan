<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MetadataController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('metadata');
    }
}
