<?php

namespace App\Http\Controllers;

use App\Models\MasterReference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MasterReferenceController extends Controller
{
    public function index(string $category)
    {
        return response()->json($this->items($category));
    }

    public function bootstrap(Request $request, string $category)
    {
        $data = $request->validate(['items' => ['array'], 'items.*.id' => ['required', 'string']]);
        DB::transaction(function () use ($category, $data) {
            $initialized = DB::table('master_reference_categories')->where('category', $category)->lockForUpdate()->exists();
            if (! $initialized) {
                foreach ($data['items'] as $item) {
                    MasterReference::create(['category' => $category, 'reference_id' => $item['id'], 'data' => $item]);
                }
                DB::table('master_reference_categories')->insert(['category' => $category, 'created_at' => now(), 'updated_at' => now()]);
            }
        });
        return response()->json($this->items($category));
    }

    public function store(Request $request, string $category)
    {
        $item = $request->validate(['id' => ['required', 'string'], 'data' => ['required', 'array']]);
        $record = MasterReference::updateOrCreate(
            ['category' => $category, 'reference_id' => $item['id']],
            ['data' => ['id' => $item['id'], ...$item['data']]],
        );
        return response()->json($record->data, 201);
    }

    public function update(Request $request, string $category, string $referenceId)
    {
        $data = $request->validate(['data' => ['required', 'array']]);
        $record = MasterReference::where('category', $category)->where('reference_id', $referenceId)->firstOrFail();
        $record->data = ['id' => $referenceId, ...$data['data']];
        $record->save();
        return response()->json($record->data);
    }

    public function destroy(string $category, string $referenceId)
    {
        MasterReference::where('category', $category)->where('reference_id', $referenceId)->firstOrFail()->delete();
        return response()->json(['message' => 'Data master berhasil dihapus dari database.']);
    }

    private function items(string $category): array
    {
        return MasterReference::where('category', $category)->orderBy('id')->get()->pluck('data')->values()->all();
    }
}
