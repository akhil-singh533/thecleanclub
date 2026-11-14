<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bays;

class StationSetupBays extends Controller
{
    public function storeBays(Request $request)
    {
        $validated = $request->validate([
            'bay_name' => 'required|string|max:255',
            'bay_number' => 'required|integer',
            'bay_status' => 'required|string|max:255',
        ]);

        $bay = Bays::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Bay created successfully',
            'data' => $bay
        ], 201);
    }
}